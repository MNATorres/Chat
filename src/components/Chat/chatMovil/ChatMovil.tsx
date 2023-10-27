import React, { useContext } from "react";
import { MdChat } from "react-icons/md";
import "./ChatMovil.css";
import { ChatContext } from "../../../hooks/ChatContext";

export default function ChatMovil() {
  const { handleClose } = useContext(ChatContext);

  return (
    <div className="close-chat-container" onClick={handleClose}>
      <MdChat className="iconCloseChat" />
    </div>
  );
}
