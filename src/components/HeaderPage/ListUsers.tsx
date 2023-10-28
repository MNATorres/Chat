import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";
import style from './styles.module.scss'

export default function ListUsers() {
  const { handleCloseListUsers, closeListUsers } = useChat();
  const { setLoggedUser, usersList } = useUser();

  return (
    <div className={style.listUsers}>
      <div className={style.flexMovil}>
        <button onClick={handleCloseListUsers}>
          <FaUserFriends />
        </button>
      </div>
      <div
        className={
          closeListUsers ? style.messagesContainer : style.closMessagesContainer
        }
      >
        <ul className={style.ulChatHeader}>
          {usersList?.map((user, i) => {
            return (
              <li key={i} onClick={() => setLoggedUser(user)}>
                {user}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
