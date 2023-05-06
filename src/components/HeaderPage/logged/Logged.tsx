import React, { useContext } from 'react'
import './Logged.css'
import { ChatContext } from '../../../globalContext/ChatContext'
import { UserContext } from '../../../globalContext/UserContext'

const usersList = ["Soporte", "Invitado"];


export default function Logged() {
  const { setLoggedUser } = useContext(UserContext)
  const { handleCloseChatHeader, closeChatHeader } = useContext(ChatContext)

  return (
    <div className={closeChatHeader ? "closeModal" : "modal-overlay"}>
      <div className="modal">
        <div className="modal-welcome">
          <p>BIENVENIDO</p>
          <h3>REGISTRATE</h3>
        </div>
        <img className='img-loggin' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdagfNlkCXKS54rDkgY6CjGNtPECsI_SZlKQ&usqp=CAU" alt="Loggin" />
        <div className="modalBody">
          <ul className='ulChatHeader'>
            {usersList.map((user) => {
              return (
                <li key={user} onClick={() => {
                  setLoggedUser(user)
                }}
                
                >
                  {user}
                </li>
              )
            })}
          </ul>
          <button onClick={handleCloseChatHeader} >Registrarse</button>
        </div>
      </div>
    </div>
  )
}
