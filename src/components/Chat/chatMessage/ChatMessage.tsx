import React, { useContext } from 'react'
import { ChatContext } from '../../../globalContext/ChatContext'
import './ChatMessage.css'


export default function ChatMessage() {
  const{messages, isCurrentUser} = useContext(ChatContext)
  
  return (
    <div className='chatContainerLeft'>
      {messages.map((message) => (
        <div className={isCurrentUser(message.sender) ? "left" : "right"} key={message.id}>
          <div className="meta">
            <span className="sender">{message.sender}</span>
            <span className="timestamp">{message.timestamp}</span>
          </div>
          <div className="text">{message.text}</div>
        </div>
      ))}
    </div>
  )
}
