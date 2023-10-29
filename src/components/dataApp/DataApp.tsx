import React from "react";
import style from "./styles.module.scss";
import { useUser } from "../../hooks/useUser";
import { useChat } from "../../hooks/useChat";
import { v4 as uuidv4 } from "uuid";

export default function DataApp() {
  const { usersList } = useUser();
  const { messages } = useChat();

  const dataApp = [
    {
      title: "User count",
      data: usersList.length,
      id: uuidv4(),
    },
    {
      title: "Message count",
      data: messages.length,
      id: uuidv4(),
    },
    {
      title: "Last update",
      data: "28/10/2023",
      id: uuidv4(),
    },
  ];

  return (
    <div className={style.containerDataApp}>
      <h4>Application Data</h4>
      <ul>
        {dataApp?.map((data) => {
          return (
            <li className={style.listData} key={data.id}>
              <p>
                {data.title}: <span className={style.data}>{data.data}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
