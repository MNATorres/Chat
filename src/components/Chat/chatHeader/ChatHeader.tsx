import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useChat } from "../../../hooks/useChat";
import style from './style.module.scss'

export default function HeaderChat() {
  const { handleClose, currentUser, isClose } = useChat();

  return (
    <div className={isClose ? style.headerChatClose : style.headerChat} onClick={handleClose}>
      <div className={style.user}>
        <BiSupport className={style.iconHeader} />
        <div className={style.userState}>
          <p>{currentUser}</p>
          <div className={style.isActive}>
            <div></div>
            <p>Activo</p>
          </div>
        </div>
      </div>
      <div className={style.closeChat}>
        <button onClick={handleClose}>
          <MdOutlineClose className={style.closeIcon} />
        </button>
      </div>
    </div>
  );
}
