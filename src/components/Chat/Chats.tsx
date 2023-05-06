import React, {useContext, useState} from 'react'
import ChatUser from './chatUser/ChatUser'
import './ChatUser.css'
import { ChatContext } from '../../globalContext/ChatContext'


export default function Chats() {
const {handleClose} =useContext(ChatContext)



  return (
    <div className='chatUserContainer'>
        <ChatUser  />
        <ChatUser />
    </div>
  )
}
