import React, { useContext } from 'react'
import { ChatContext } from '../../../globalContext/ChatContext'
import './ChatMessage.css'


export default function ChatMessage() {
  const{messages} = useContext(ChatContext)
  
  return (
    <div className='chatContainer'>
      {messages.map((message) => (
        <div className="chatMessage" key={message.id}>
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
