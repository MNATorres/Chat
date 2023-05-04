import React, { useContext } from 'react';
import './ChatHeader.css'
import { BiSupport } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { ChatContext } from '../../../globalContext/ChatContext';

export default function HeaderChat() {
  const { handleClose } = useContext(ChatContext)

  return (
    <div className='headerChat'>
      <div className="user">
        <BiSupport className='iconHeader' />
        <div className="userState">
          <p>CompanyName</p>
          <div className="isActive">
            <div></div>
            <p>Activo</p>
          </div>
        </div>
      </div>
      <div className="close-chat">
        <button onClick={handleClose}>
          <MdOutlineClose className="close-icon" />
        </button>
      </div>
    </div>
  )
}
