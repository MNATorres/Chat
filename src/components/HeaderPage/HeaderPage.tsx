import React, { useContext } from 'react'
import './HeaderPage.css'
import { TiMessages } from 'react-icons/ti'
import { ChatContext } from '../../globalContext/ChatContext'
import { UserContext } from '../../globalContext/UserContext'

const usersList = ["Matias", "Ralhp"];


export default function HeaderPage() {
  const { handleCloseChatHeader, closeChatHeader } = useContext(ChatContext)

  return (
    <div className='headerPageContainer'>
      <div>
        <button onClick={handleCloseChatHeader}>
          <TiMessages />
        </button>
      </div>
      <div className={closeChatHeader ? "messagesContainer ultext" : "closMessagesContainer"} >
        <ul className='ulChatHeader'>
          {usersList.map((user) => {
            return (
              <a key={user} href="http://127.0.0.1:5173/" target="_blank">
                <li >
                  {user}
                </li>
              </a>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
