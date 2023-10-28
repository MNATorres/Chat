import React from "react";
import "./ChatUser.css";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatMessage from "../chatBody/ChatMessage";
import ChatInput from "../chatInput/ChatInput";
import { useChat } from "../../../hooks/useChat";
import ChatMovil from "../chatMovil/ChatMovil";

export default function ChatUser() {
  const { isClose } = useChat();

  return (
    <div>
      <div className={isClose ? "noOpenChat" : "openChat"}>
        <ChatHeader />
        <div className="bodyChat">
          <ChatMessage />
          <ChatInput />
        </div>
      </div>
      <div className={isClose ? "chatMovil" : "closeChatMovil"}>
        <ChatMovil />
      </div>
    </div>
  );
}
