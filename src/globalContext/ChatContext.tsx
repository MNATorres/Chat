import React, { useEffect, useRef, useState } from 'react'


type PropsMessages = {
    _id: string;
    sender: string,
    text: string,
    timestamp: string
}

const users = ["Matias", "Ralph"]


interface ChatContext {
    handleClose: () => void;
    isClose: boolean;
    messages: PropsMessages[];
    currentUser: string;
    isCurrentUser: (sender: string) => boolean;
    handleChange: (e: React.BaseSyntheticEvent) => void;
    handleSubmit: (e: React.BaseSyntheticEvent) => void;
    text: string;
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    scrollRef: React.RefObject<HTMLDivElement> | null;
    usersChat: string[];
    handleCloseChatHeader: () => void
    closeChatHeader: boolean
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => { },
    isClose: true,
    messages: [],
    currentUser: "",
    isCurrentUser: () => true,
    handleChange: (_e: React.BaseSyntheticEvent) => { },
    handleSubmit: (_e: React.BaseSyntheticEvent) => { },
    text: "",
    handleKeyDown: (_event: React.KeyboardEvent<HTMLTextAreaElement>) => { },
    scrollRef: null,
    usersChat: [],
    handleCloseChatHeader: () => { },
    closeChatHeader: false
})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<any[]>([])
    const [currentUser,] = useState("Support")
    const [textValue, setTextValue] = useState("")
    const [usersChat, setUserChat] = useState<string[]>(users)
    const scrollRef = useRef<HTMLDivElement>(null)
    const [closeChatHeader, setCloseChatHeader] = useState(false)

    useEffect(() => {
        if (scrollRef.current === null) return
        scrollRef.current.scrollBy(0, 1000)
    }, [messages, isClose])



    const loadMessages = () =>
        fetch("https://chat-back-three.vercel.app/api/messages")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessages(data);
                console.log(data);
            });

    useEffect(() => {
        loadMessages()
    }, []);


    const handleClose = () => {
        setIsClose(!isClose)
    }

    const isCurrentUser = (sender: string) => sender === currentUser;


    const handleChange = (e: React.BaseSyntheticEvent) => {
        setTextValue(
            e.currentTarget.value,
        );

    }

    let localTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timestamp = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return timestamp
    }



    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        if (textValue.trim() === "") return

        const newMessage = {
            sender: "Jhon",
            timestamp: localTime(),
            text: textValue
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

    }


    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    };


    const handleCloseChatHeader = () => {
        setCloseChatHeader(!closeChatHeader)
    }



    return (
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser, handleChange, handleSubmit, text: textValue, handleKeyDown, scrollRef, usersChat, handleCloseChatHeader, closeChatHeader }}>
            {children}
        </ChatContext.Provider>
    )
}