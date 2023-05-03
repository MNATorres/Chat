import React from 'react'
import './ChatInput.css'
import { IoMdSend } from 'react-icons/io';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { BsFiletypeDoc } from 'react-icons/bs';
import { FiImage } from 'react-icons/fi';



export default function ChatInput() {
    return (
        <div className='inputContainer'>
            <div className='textContainer'>
                <textarea placeholder='Aa'></textarea>
                <IoMdSend className='iconSend' />
            </div>
            <div className="media-container">
                <MdOutlineEmojiEmotions className="emojis" />
                <BsFiletypeDoc className="doc" />
                <FiImage className="img" />
            </div>
        </div>
    )
}
