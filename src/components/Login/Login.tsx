import React from "react";
import style from "./style.module.scss";
import InputName from "./InputNameLogin";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useChat } from "../../hooks/useChat";
import { maxLengthNameLogins } from "../../utils/maxLengthName";
import { useUser } from "../../hooks/useUser";

export default function Login() {
  const { handleCloseListUsers, currentUser, handleClose } = useChat();
  const {handleLogout} = useUser()

  return (
    <div className={style.containerLogin}>
      <div className={style.login}>
        <div>
          <h3>Bienvenido!</h3>
          <h4>Registra tu nombre para dejar un mensaje</h4>
        </div>
        {!currentUser && <InputName />}
        {currentUser && (
          <div>
            <p>
              Ahora interactuas como{" "}
              <span onClick={handleClose} className={style.currentUser}>
                {maxLengthNameLogins(currentUser)}
              </span>
            </p>
            <AiOutlinePoweroff onClick={handleLogout} className={style.logout} />
          </div>
        )}
        <div className={style.note}>
          <p>
            Tu usuario quedará registrado en
            <span className={style.messages} onClick={handleCloseListUsers}>
              <FaUserFriends className={style.iconUser} />
            </span>
            para cuando quieras enviar nuevamente mensajes
          </p>
        </div>
      </div>
    </div>
  );
}
