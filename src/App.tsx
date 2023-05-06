import './App.css'
import React from 'react'
import { ChatProvider } from './globalContext/ChatContext'
import HeaderPage from './components/HeaderPage/HeaderPage'
import Chats from './components/Chat/Chats'
import { UserProvider } from './globalContext/UserContext'

function App() {

  return (
    <div className='App'>
      <UserProvider>
        <ChatProvider>
          <HeaderPage />
          <Chats />
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default App
