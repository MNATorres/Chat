import React from "react";
import { TiMessages } from "react-icons/ti";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";

export default function ListUsers() {
  const { handleCloseChatHeader, closeChatHeader } = useChat();
  const { setLoggedUser, usersList } = useUser();

  return (
    <div className="listUsers">
      <div className="flexMovil">
        <button onClick={handleCloseChatHeader}>
          <TiMessages />
        </button>
      </div>
      <div
        className={
          closeChatHeader ? "messagesContainer ultext" : "closMessagesContainer"
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
