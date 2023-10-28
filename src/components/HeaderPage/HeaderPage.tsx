import React from "react";
import ListUsers from "./ListUsers";
import { useChat } from "../../hooks/useChat";
import { maxLengthNameHeader } from "../../utils/maxLengthName";
import style from "./styles.module.scss";

export default function HeaderPage() {
  const { currentUser, handleClose } = useChat();
  return (
    <div className={style.headerPage}>
      <h3>Chat App</h3>
      <p className={style.currentUserHeaderPage} onClick={handleClose}>
        {currentUser && maxLengthNameHeader(currentUser)}
      </p>
      <ListUsers />
    </div>
  );
}
