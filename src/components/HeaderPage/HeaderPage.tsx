import React from "react";
import "./HeaderPage.css";
import ListUsers from "./ListUsers";
import { useChat } from "../../hooks/useChat";

export default function HeaderPage() {
  const { currentUser } = useChat();
  return (
    <div className="headerPage">
      <h3>Chat App</h3>
      {currentUser}
      <ListUsers />
    </div>
  );
}
