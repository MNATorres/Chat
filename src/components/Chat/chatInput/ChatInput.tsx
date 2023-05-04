import React, { useContext } from 'react'
import './ChatInput.css'
import { IoMdSend } from 'react-icons/io';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { BsFiletypeDoc } from 'react-icons/bs';
import { FiImage } from 'react-icons/fi';
import { ChatContext } from '../../../globalContext/ChatContext';


export default function ChatInput() {
    const { updateText, handleAdd } = useContext(ChatContext)

    return (
        <div className='inputContainer'>
            <div className='textContainer'>
                <textarea onChange={updateText} placeholder='Aa'></textarea>
                <button onClick={handleAdd}>
                    <IoMdSend className='iconSend' />
                </button>
            </div>
            <div className="media-container">
                <MdOutlineEmojiEmotions className="emojis" />
                <BsFiletypeDoc className="doc" />
                <FiImage className="img" />
            </div>
        </div>
    )
}
