import './App.css'
import React from 'react'
import { ChatProvider } from './globalContext/ChatContext'
import HeaderPage from './components/HeaderPage/HeaderPage'
import Chats from './components/Chat/Chats'

function App() {

  return (
    <div className='App'>
      <ChatProvider>
        <HeaderPage />
        <Chats />
      </ChatProvider>
    </div>
  )
}

export default App
