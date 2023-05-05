import React, { useContext } from 'react'
import './Chat.css'
import CloseChat from './closeChat/CloseChat'
import ChatHeader from './chatHeader/ChatHeader'
import ChatMessage from './chatMessage/ChatMessage'
import ChatInput from './chatInput/ChatInput'
import { ChatContext } from '../../globalContext/ChatContext'

export default function Chat() {
  const { isClose } = useContext(ChatContext)

  return (
    <div className="chat-container">
      <div className={isClose ? "noOpenChat" : "openChat"}>
        <ChatHeader />
        <ChatMessage />
        <ChatInput />
      </div>
      <div className={isClose ?  "closeChat" : "noCloseChat"}>
        <CloseChat />
      </div>
    </div>

  )
}
