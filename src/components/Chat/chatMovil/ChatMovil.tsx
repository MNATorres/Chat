import React  from "react";
import { MdChat } from "react-icons/md";
import { useChat } from "../../../hooks/useChat";
import style from './styles.module.scss'

export default function ChatMovil() {
  const { handleClose } = useChat();

  return (
    <div className={style.closeChatContainer} onClick={handleClose}>
      <MdChat className={style.iconCloseChat} />
    </div>
  );
}
