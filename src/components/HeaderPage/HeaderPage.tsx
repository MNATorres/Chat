import React, { useContext } from 'react'
import './HeaderPage.css'
import { TiMessages } from 'react-icons/ti'
import { ChatContext } from '../../globalContext/ChatContext'
import { UserContext } from '../../globalContext/UserContext'


export default function HeaderPage() {
  const { handleCloseChatHeader, closeChatHeader } = useContext(ChatContext)
  const {users} = useContext(UserContext)

  return (
    <div className='headerPageContainer'>
      <div>
        <button onClick={handleCloseChatHeader}>
          <TiMessages />
        </button>
      </div>
      <div className={closeChatHeader ? "messagesContainer ultext" : "closMessagesContainer"} >
        <ul className='ulChatHeader'>
          {users.map((user) => {
            return (
              <li>
                <a href="http://127.0.0.1:5173/" target="_blank">
                  {user}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
