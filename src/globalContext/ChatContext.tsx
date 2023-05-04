import React, { useEffect, useState } from 'react'


type PropsMessages = {
    id: number,
    sender: string,
    text: string,
    timestamp: string
}

type PropsInputText = {
    id: number,
    text: string,
    timestamp: string,
    send: string
}

interface ChatContext {
    handleClose: () => void;
    isClose: boolean;
    messages: PropsMessages[];
    currentUser: string;
    isCurrentUser: (sender: string) => boolean;
    updateText: (e: React.BaseSyntheticEvent) => void;
    handleAdd: () => void

}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => { },
    isClose: true,
    messages: [],
    currentUser: "",
    isCurrentUser: () => true,
    updateText: (e: React.BaseSyntheticEvent) => { },
    handleAdd: () => { },
})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<PropsMessages[]>([])
    const [currentUser, setCurrentUser] = useState("Support")
    const [text, setText] = useState("")
    const [listChats, setListChats] = useState<PropsInputText[]>([])

    const updateText = (e: React.BaseSyntheticEvent) => {
        setText(e.currentTarget.value);
        console.log(text)
    }

    const handleAdd = () => {
        setListChats([...listChats, { id: Math.random(), text: text, timestamp: "10/12/2023", send: "Jhon" }]);
        setText(() => "");
    }

    useEffect(() => {
        setText("");
      }, [listChats]);
    console.log(listChats)

    

    useEffect(() => {
        fetch("/messages.json")
            .then((response) => response.json())
            .then((data) => setMessages(data.messages));
    }, []);

    const handleClose = () => {
        setIsClose(!isClose)
    }

    const isCurrentUser = (sender: string) => sender === currentUser;

    return (
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser, updateText, handleAdd }}>
            {children}
        </ChatContext.Provider>
    )
}