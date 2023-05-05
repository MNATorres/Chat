import React, { useContext } from 'react'
import './HeaderPage.css'
import { TiMessages } from 'react-icons/ti'
import { ChatContext } from '../../globalContext/ChatContext'


export default function HeaderPage() {
  const { usersChat, handleCloseChatHeader, closeChatHeader } = useContext(ChatContext)

  return (
    <div className='headerPageContainer'>
      <div>
        <button onClick={handleCloseChatHeader}>
          <TiMessages />
        </button>
      </div>
      <div className={closeChatHeader ? "messagesContainer ultext" : "closMessagesContainer" } >
        <ul className='ulChatHeader'>
          {usersChat.map((user) => {
            return (
              <li>
                {user}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
