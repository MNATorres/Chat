import React, { useState } from 'react'

interface ChatContext {
    handleClose: () => void
    isClose: boolean
}

export const ChatContext = React.createContext<ChatContext>({
    handleClose: () => {},
    isClose: true
})

export const ChatProvider = ({children} : {children: React. ReactNode}) => {
    const [isClose, setIsClose] = useState(true)

    const handleClose = () => {
        setIsClose(!isClose)
    }

    return(
        <ChatContext.Provider value={{handleClose, isClose}}>
            {children}
        </ChatContext.Provider>
    )
}