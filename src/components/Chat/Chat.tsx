import React from 'react'
import HeaderChat from './ChatHeader'
import './Chat.css'
import ChatMessage from './ChatMessage'

export default function Chat() {
  return (
    <div className='chat'>
      <HeaderChat />
      <ChatMessage />
    </div>
  )
}
