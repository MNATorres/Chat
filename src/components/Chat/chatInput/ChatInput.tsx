import React from "react";
import { IoMdSend } from "react-icons/io";
import { useChat } from "../../../hooks/useChat";
import style from "./style.module.scss";

export default function ChatInput() {
  const { handleChange, handleSubmit, text, handleKeyDown } = useChat();

  return (
    <div className={style.inputContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.textContainer}>
          <textarea
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={text}
            placeholder="Aa"
          ></textarea>
          <button type="submit" aria-label="Enviar mensaje">
            <IoMdSend className={style.iconSend} />
          </button>
        </div>
      </form>
    </div>
  );
}
