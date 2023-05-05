import './App.css'
import React from 'react'
import Chat from './components/Chat/Chat'
import { ChatProvider } from './globalContext/ChatContext'
import HeaderPage from './components/HeaderPage/HeaderPage'

function App() {

  return (
    <div className='App'>
      <ChatProvider>
        <HeaderPage />
        <Chat />
      </ChatProvider>
    </div>
  )
}

export default App
