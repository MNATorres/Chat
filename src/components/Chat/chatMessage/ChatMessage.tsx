import React, { useState, useEffect } from 'react'
import './ChatMessage.css'

type PropsMessages = {
  id: number,
  sender: string,
  text: string,
  timestamp: string
}

export default function ChatMessage() {
  const [messages, setMessages] = useState<PropsMessages[]>([]);

  useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data) => setMessages(data.messages));
  }, []);


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
