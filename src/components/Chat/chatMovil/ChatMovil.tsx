import React  from "react";
import { MdChat } from "react-icons/md";
import "./ChatMovil.css";
import { useChat } from "../../../hooks/useChat";

export default function ChatMovil() {
  const { handleClose } = useChat();

  return (
    <div className="close-chat-container" onClick={handleClose}>
      <MdChat className="iconCloseChat" />
    </div>
  );
}
