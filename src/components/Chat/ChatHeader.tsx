import React from 'react';
import './ChatHeader.css';
import { BiSupport } from 'react-icons/bi'

export default function HeaderChat() {
  return (
    <div className='headerChat'>
      <BiSupport className='iconHeader' />
      <p>CompanyName</p>
    </div>
  )
}
