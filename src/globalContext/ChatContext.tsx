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
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => {},
    isClose: true,
    messages: []
})

export const ChatProvider = ({children} : {children: React. ReactNode}) => {
    const [isClose, setIsClose] = useState(true)
    const [messages, setMessages] = useState<PropsMessages[]>([]);

  useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data) => setMessages(data.messages));
  }, []);

    const handleClose = () => {
        setIsClose(!isClose)
    }

    return(
        <ChatContext.Provider value={{handleClose, isClose, messages}}>
            {children}
        </ChatContext.Provider>
    )
}