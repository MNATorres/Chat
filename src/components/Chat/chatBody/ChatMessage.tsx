import React from "react";
import { useChat } from "../../../hooks/useChat";
import "./ChatMessage.css";

//temp1.scrollBy(0,1000)

export default function ChatMessage() {
  const { messages, isCurrentUser, scrollRef } = useChat();

  return (
    <div className="chatContainer" ref={scrollRef}>
      {messages.map((message) => (
        <div
          className={isCurrentUser(message.sender) ? "right" : "left"}
          key={message._id}
        >
          <div className="meta">
            <span className="sender">{message.sender}</span>
            <span className="timestamp">{message.timestamp}</span>
          </div>
          <div className="text">{message.text}</div>
        </div>
      ))}
    </div>
  );
}
