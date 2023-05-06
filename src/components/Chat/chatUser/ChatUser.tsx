import React, { useContext } from 'react'
import './ChatUser.css'
import ChatHeader from '../chatHeader/ChatHeader'
import ChatMessage from '../chatMessage/ChatMessage'
import ChatInput from '../chatInput/ChatInput'
import { ChatContext } from '../../../globalContext/ChatContext'



export default function ChatUser() {
  const { isClose } = useContext(ChatContext)

  return (
    <div>
      <div className={isClose ? "noOpenChat" : "openChat"}>
        <ChatHeader  />
        <div className="bodyChat">
          <ChatMessage />
          <ChatInput />
        </div>
      </div>
    </div>

  )
}


//<MdChat className="iconCloseChat" />