import React, { useEffect, useState } from 'react'


type PropsMessages = {
    id: number,
    sender: string,
    text: string,
    timestamp: string
}


interface ChatContext {
    handleClose: () => void;
    isClose: boolean;
    messages: PropsMessages[];
    currentUser: string;
    isCurrentUser: (sender: string) => boolean;
    updateText: (e: React.BaseSyntheticEvent) => void;
    handleAdd: () => void;
    text: string;
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => { },
    isClose: true,
    messages: [],
    currentUser: "",
    isCurrentUser: () => true,
    updateText: (e: React.BaseSyntheticEvent) => { },
    handleAdd: () => { },
    text: ""
})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<PropsMessages[]>([])
    const [currentUser, setCurrentUser] = useState("Support")
    const [text, setText] = useState("")

    const updateText = (e: React.BaseSyntheticEvent) => {
        setText(e.currentTarget.value);
        console.log(text)
    }

    const handleAdd = () => {
        if(text.length === 0) return
        setMessages([...messages, { id: Math.random(), text: text, timestamp: "10/12/2023", sender: "Jhon" }]);
        setText("");
    }

    console.log(messages)

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
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser, updateText, handleAdd, text }}>
            {children}
        </ChatContext.Provider>
    )
}