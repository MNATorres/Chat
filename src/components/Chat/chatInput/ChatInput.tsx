import React, { useContext } from 'react'
import './ChatInput.css'
import { IoMdSend } from 'react-icons/io';
//import { MdOutlineEmojiEmotions } from 'react-icons/md';
//import { BsFiletypeDoc } from 'react-icons/bs';
//import { FiImage } from 'react-icons/fi';
import { ChatContext } from '../../../globalContext/ChatContext';


export default function ChatInput() {
    const { handleChange, handleSubmit, text, handleKeyDown } = useContext(ChatContext)


    return (
        <div className='inputContainer'>
            <form onSubmit={handleSubmit}>
                <div className='textContainer'>
                    <textarea onKeyDown={handleKeyDown} onChange={handleChange} value={text} placeholder='Aa'></textarea>
                    <button type='submit' aria-label='Enviar mensaje'>
                        <IoMdSend className='iconSend' />
                    </button>
                </div>

            </form>
        </div>
    )
}

/*<div className="media-container">
    <MdOutlineEmojiEmotions className="emojis" />
    <BsFiletypeDoc className="doc" />
    <FiImage className="img" />
</div>
*/