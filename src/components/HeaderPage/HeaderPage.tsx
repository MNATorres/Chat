import React from "react";
import "./HeaderPage.css";
import { TiMessages } from "react-icons/ti";
import { useChat } from "../../hooks/useChat";
import { useUser } from "../../hooks/useUser";

const usersList = ["Matias", "Ralph", "Angel", "Fede", "Otro Usuario"];

export default function HeaderPage() {
  const { handleCloseChatHeader, closeChatHeader } = useChat();
  const { setLoggedUser } = useUser();

  return (
    <div className="headerPageContainer">
      <div>
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
          {usersList.map((user) => {
            return (
              <li key={user} onClick={() => setLoggedUser(user)}>
                {user}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
