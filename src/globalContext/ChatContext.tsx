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
    handleChange: (e: React.BaseSyntheticEvent) => void;
    handleSubmit: (e: React.BaseSyntheticEvent) => void;
    text: string;
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => { },
    isClose: true,
    messages: [],
    currentUser: "",
    isCurrentUser: () => true,
    handleChange: (e: React.BaseSyntheticEvent) => { },
    handleSubmit: (e: React.BaseSyntheticEvent) => { },
    text: "",
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => { }

})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<PropsMessages[]>([])
    const [currentUser, setCurrentUser] = useState("Support")
    const [text, setText] = useState("")

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setText(e.currentTarget.value);
    }

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        if (text.length === 0) return
        setMessages([...messages, { id: Math.random(), text: text, timestamp: "10/12/2023", sender: "Jhon" }]);
        setText("");
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    };


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
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser, handleChange, handleSubmit, text, handleKeyDown }}>
            {children}
        </ChatContext.Provider>
    )
}