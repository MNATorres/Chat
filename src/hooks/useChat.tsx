import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./useUser";

type PropsMessages = {
  _id: string;
  sender: string;
  text: string;
  timestamp: string;
};

interface ChatContext {
  handleClose: () => void;
  isClose: boolean;
  messages: PropsMessages[];
  currentUser: string | null;
  isCurrentUser: (sender: string) => boolean;
  handleChange: (e: React.BaseSyntheticEvent) => void;
  handleSubmit: (e: React.BaseSyntheticEvent) => void;
  text: string;
  handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  scrollRef: React.RefObject<HTMLDivElement> | null;
  handleCloseChatHeader: () => void;
  closeChatHeader: boolean;
}

export const ChatContext = React.createContext<ChatContext>({
  handleClose: () => {},
  isClose: true,
  messages: [],
  currentUser: "",
  isCurrentUser: () => true,
  handleChange: (_e: React.BaseSyntheticEvent) => {},
  handleSubmit: (_e: React.BaseSyntheticEvent) => {},
  text: "",
  handleKeyDown: (_event: React.KeyboardEvent<HTMLTextAreaElement>) => {},
  scrollRef: null,
  handleCloseChatHeader: () => {},
  closeChatHeader: false,
});

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClose, setIsClose] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [textValue, setTextValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [closeChatHeader, setCloseChatHeader] = useState(false);
  const { loggedUser } = useContext(UserContext);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        loadMessages();
      }, 1000);
    }
    loadMessages();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current === null) return;
    scrollRef.current.scrollBy(0, 10000000);
  }, [messages, isClose]);

  const loadMessages = () => {
    fetch("https://chat-back-three.vercel.app/api/messages")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMessages(data);
        console.log(data);
      });
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleClose = () => {
    setIsClose(!isClose);
  };

  const isCurrentUser = (sender: string) => sender === loggedUser;

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setTextValue(e.currentTarget.value);
  };

  let localTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timestamp = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return timestamp;
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (!loggedUser) {
      alert("Por favor, selecciona un usuario");
      return;
    }
    if (textValue.trim() === "") return;

    const newMessage = {
      sender: loggedUser,
      timestamp: localTime(),
      text: textValue,
    };

    fetch("https://chat-back-three.vercel.app/api/message", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => loadMessages());

    setTextValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleCloseChatHeader = () => {
    setCloseChatHeader(!closeChatHeader);
  };

  return (
    <ChatContext.Provider
      value={{
        handleClose,
        isClose,
        messages,
        currentUser: loggedUser,
        isCurrentUser,
        handleChange,
        handleSubmit,
        text: textValue,
        handleKeyDown,
        scrollRef,
        handleCloseChatHeader,
        closeChatHeader,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
