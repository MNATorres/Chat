import React, { useContext } from 'react'
import './HeaderPage.css'
import { ChatContext } from '../../globalContext/ChatContext'
import { UserContext } from '../../globalContext/UserContext'
import cerrarSession from './../../img/cerrar.png'



export default function HeaderPage() {
  const { handleCloseChatHeader } = useContext(ChatContext)


  return (
    <div className='headerPageContainer'>
      <div >
        <button onClick={handleCloseChatHeader}>
          <img className='cerrarSesionHeader' src={cerrarSession} alt="" />
        </button>
      </div>
    </div>
  )
}
