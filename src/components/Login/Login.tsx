import React from "react";
import style from "./style.module.scss";
import InputName from "./InputNameLogin";
import { TiMessages } from "react-icons/ti";
import { useChat } from "../../hooks/useChat";

export default function Login() {
  const { handleCloseChatHeader, currentUser } = useChat();

  return (
    <div className={style.containerLogin}>
      <div className={style.login}>
        <div>
          <h3>Bienvenido!</h3>
          <h4>Registra tu nombre para dejar un mensaje</h4>
        </div>
        <InputName />
        {currentUser && (
          <p>
            Ahora interactuas como <span className={style.currentUser}>{currentUser}</span>
          </p>
        )}
        <div className={style.note}>
          <p>
            Tu usuario quedará registrado en
            <button className={style.messages} onClick={handleCloseChatHeader}>
              <TiMessages />
            </button>
            para cuando quieras enviar nuevamente mensajes
          </p>
        </div>
      </div>
    </div>
  );
}
