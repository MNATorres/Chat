import './App.css'
import React from 'react'
import Chat from './components/Chat/Chat'
import { ChatProvider } from './globalContext/ChatContext'

function App() {

  return (
    <div className='App'>
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </div>
  )
}

export default App
