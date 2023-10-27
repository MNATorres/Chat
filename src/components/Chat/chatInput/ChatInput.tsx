import React from "react";
import "./ChatInput.css";
import { IoMdSend } from "react-icons/io";
import { useChat } from "../../../hooks/useChat";

export default function ChatInput() {
  const { handleChange, handleSubmit, text, handleKeyDown } = useChat();

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <div className="textContainer">
          <textarea
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={text}
            placeholder="Aa"
          ></textarea>
          <button type="submit" aria-label="Enviar mensaje">
            <IoMdSend className="iconSend" />
          </button>
        </div>
      </form>
    </div>
  );
}
