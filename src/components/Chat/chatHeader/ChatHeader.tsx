import React from "react";
import "./ChatHeader.css";
import { BiSupport } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useChat } from "../../../hooks/useChat";

export default function HeaderChat() {
  const { handleClose, currentUser } = useChat();

  return (
    <div className="headerChat" onClick={handleClose}>
      <div className="user">
        <BiSupport className="iconHeader" />
        <div className="userState">
          <p>{currentUser}</p>
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
  );
}
