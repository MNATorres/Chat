import React, { useEffect, useRef } from "react";
import { FaUserFriends } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";
import style from "./styles.module.scss";

export default function ListUsers() {
  const { handleCloseListUsers, closeListUsers } = useChat();
  const { setLoggedUser, usersList } = useUser();
  const listUsersRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (e: { target: any }) => {
      if (listUsersRef.current && !listUsersRef.current.contains(e.target)) {
        handleCloseListUsers();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={listUsersRef} className={style.listUsers}>
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
          {usersList?.map((user) => {
            return (
              <li
                key={user._id}
                onClick={() => {
                  setLoggedUser(user.user);
                  handleCloseListUsers();
                }}
              >
                {user.user}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
