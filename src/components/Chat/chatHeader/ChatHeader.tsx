import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useChat } from "../../../hooks/useChat";
import style from "./style.module.scss";
import { maxLengthNameChat } from "../../../utils/maxLengthName";

export default function HeaderChat() {
  const { handleClose, currentUser, isClose } = useChat();

  return (
    <div
      className={isClose ? style.headerChatClose : style.headerChat}
      onClick={handleClose}
    >
      <div className={style.user}>
        <div className={style.containerImageLogin}>
          {!currentUser && (
            <img
              src="https://media4.giphy.com/media/X9jcycOeoT14CIKUuC/giphy.gif?cid=6c09b952a172rw149tdvkb09t8kyugt6lmmnv710x3eoxuuz&ep=v1_gifs_search&rid=giphy.gif&ct=s"
              alt="message"
              className={style.imageMessage}
            />
          )}
          {currentUser && <p className={style.nameLetter}>{currentUser.slice(0, 1).toUpperCase()}</p>}
        </div>
        <div className={style.userState}>
          <p>{currentUser && maxLengthNameChat(currentUser)}</p>
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
