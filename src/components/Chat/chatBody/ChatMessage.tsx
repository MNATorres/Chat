import React from "react";
import { useChat } from "../../../hooks/useChat";
import "./ChatMessage.css";
import { maxLengthNameMessage } from "../../../utils/maxLengthName";

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
            <span className="sender">
              {maxLengthNameMessage(message.sender)}
            </span>
            <span className="timestamp">{message.timestamp}</span>
          </div>
          <div className="text">{message.text}</div>
        </div>
      ))}
    </div>
  );
}
