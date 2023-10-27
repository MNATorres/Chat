import React from "react";
import { ChatProvider } from "./hooks/useChat";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import Chats from "./components/Chat/Chats";
import { UserProvider } from "./hooks/useUser";
import Login from "./components/Login/Login";
import style from './style.module.scss'

function App() {
  return (
    <div className={style.app}>
      <UserProvider>
        <ChatProvider>
          <HeaderPage />
          <Login />
          <Chats />
        </ChatProvider>
      </UserProvider>
    </div>
  );
}

export default App;
