import React from "react";
import { ChatProvider } from "./hooks/useChat";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import Chats from "./components/Chat/Chats";
import { UserProvider } from "./hooks/useUser";
import Login from "./components/Login/Login";
import style from "./style.module.scss";
import DataApp from "./components/dataApp/DataApp";

function App() {
  return (
    <div className={style.App}>
      <UserProvider>
        <ChatProvider>
          <HeaderPage />
          <Login />
          <DataApp />
          <Chats />
        </ChatProvider>
      </UserProvider>
    </div>
  );
}

export default App;
