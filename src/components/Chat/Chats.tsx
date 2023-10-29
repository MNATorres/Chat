import React from "react";
import ChatUser from "./chatUser/ChatUser";
import style from "./style.module.scss";

export default function Chats() {
  return (
    <div className={style.chatUserContainer}>
      <ChatUser />
    </div>
  );
}
