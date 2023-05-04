import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'


type PropsMessages = {
    _id: string;
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
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void,
    scrollRef: React.RefObject<HTMLDivElement> | null
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
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => { },
    scrollRef: null
})

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<any[]>([])
    const [currentUser, setCurrentUser] = useState("Support")
    const [textValue, setTextValue] = useState("")
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current === null) return
        scrollRef.current.scrollBy(0, 1000)
    }, [messages, isClose])



    const loadMessages = () =>
        fetch("http://localhost:9000/api/messages")
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


        fetch("http://localhost:9000/api/message", {
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






    return (
        <ChatContext.Provider value={{ handleClose, isClose, messages, currentUser, isCurrentUser, handleChange, handleSubmit, text: textValue, handleKeyDown, scrollRef }}>
            {children}
        </ChatContext.Provider>
    )
}