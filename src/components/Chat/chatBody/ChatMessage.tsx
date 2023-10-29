import React from "react";
import { useChat } from "../../../hooks/useChat";
import { maxLengthNameMessage } from "../../../utils/maxLengthName";
import style from "./styles.module.scss";

//temp1.scrollBy(0,1000)

export default function ChatMessage() {
  const { messages, isCurrentUser, scrollRef } = useChat();

  return (
    <div className={style.chatContainer} ref={scrollRef}>
      {messages.map((message) => (
        <div
          className={isCurrentUser(message.sender) ? style.right : style.left}
          key={message._id}
        >
          <div className={style.meta}>
            <span className={style.sender}>
              {maxLengthNameMessage(message.sender)}
            </span>
            <span className={style.timestamp}>{message.timestamp}</span>
          </div>
          <div className={style.text}>{message.text}</div>
        </div>
      ))}
    </div>
  );
}
