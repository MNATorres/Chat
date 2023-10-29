import React, { useEffect, useRef } from "react";
import { FaUserFriends } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";
import style from "./styles.module.scss";
import { maxLengthListName } from "../../utils/maxLengthName";

export default function ListUsers() {
  const { handleCloseListUsers, closeListUsers, setCloseListUsers } = useChat();
  const { setLoggedUser, usersList } = useUser();
  const listUsersRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (e: { target: any }) => {
      if (listUsersRef.current && !listUsersRef.current.contains(e.target)) {
        setCloseListUsers(false);
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
                style={{color: user.color}}
              >
                {maxLengthListName(user.user)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
