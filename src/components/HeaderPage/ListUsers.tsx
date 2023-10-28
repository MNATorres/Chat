import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";

export default function ListUsers() {
  const { handleCloseListUsers, closeListUsers } = useChat();
  const { setLoggedUser, usersList } = useUser();

  return (
    <div className="listUsers">
      <div className="flexMovil">
        <button onClick={handleCloseListUsers}>
          <FaUserFriends />
        </button>
      </div>
      <div
        className={
          closeListUsers ? "messagesContainer ultext" : "closMessagesContainer"
        }
      >
        <ul className="ulChatHeader">
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
