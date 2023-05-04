import React, { useEffect, useState } from 'react'


type PropsMessages = {
    id: number,
    sender: string,
    text: string,
    timestamp: string
}

interface ChatContext {
    handleClose: () => void
    isClose: boolean
    messages: PropsMessages[]
    currentUser: string
    isCurrentUser: (sender: string) => boolean;
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => { },
    isClose: true,
    messages: [],
    currentUser: "",
    isCurrentUser: () => true
})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<PropsMessages[]>([]);
    const [currentUser, setCurrentUser] = useState("Support")

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
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser }}>
            {children}
        </ChatContext.Provider>
    )
}