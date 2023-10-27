import React from "react";
import "./HeaderPage.css";
import ListUsers from "./ListUsers";


export default function HeaderPage() {
  
  return (
    <div className="headerPage">
      <h3>Chat App</h3>
     <ListUsers />
    </div>
  );
}
