import React from "react";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatMessage from "../chatBody/ChatMessage";
import ChatInput from "../chatInput/ChatInput";
import { useChat } from "../../../hooks/useChat";
import ChatMovil from "../chatMovil/ChatMovil";
import style from './styles.module.scss'

export default function ChatUser() {
  const { isClose } = useChat();

  return (
    <div>
      <div className={isClose ? style.noOpenChat : style.openChat}>
        <ChatHeader />
        <div className={style.bodyChat}>
          <ChatMessage />
          <ChatInput />
        </div>
      </div>
      <div className={isClose ? style.chatMovil : style.closeChatMovil}>
        <ChatMovil />
      </div>
    </div>
  );
}
