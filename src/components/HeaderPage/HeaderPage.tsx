import React, { useContext } from 'react'
import './HeaderPage.css'
import { TiMessages } from 'react-icons/ti'
import { ChatContext } from '../../globalContext/ChatContext'
import { UserContext } from '../../globalContext/UserContext'

const usersList = ["Matias", "Ralph", "Angel", "Fede", "Otro Usuario"];


export default function HeaderPage() {
  const { handleCloseChatHeader, closeChatHeader } = useContext(ChatContext)
  const {loggedUser, setLoggedUser} = useContext(UserContext)

  console.log(loggedUser)

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
                <li key={user} onClick={() => setLoggedUser(user)}>
                  {user}
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
