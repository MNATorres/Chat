import React, {useContext} from 'react'
import { MdChat } from 'react-icons/md'
import './CloseChat.css'
import { ChatContext } from '../../../globalContext/ChatContext'

export default function CloseChat() {
const {handleClose} = useContext(ChatContext)

  return (
    <div className='close-chat-container' onClick={handleClose}>
        <MdChat className="iconCloseChat" />
    </div>
  )
}
