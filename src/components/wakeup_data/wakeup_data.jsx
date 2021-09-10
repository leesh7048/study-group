import React from "react";
import styles from "./wakeup_data.module.css";

const WakeUpData = ({ data }) => {
  const { name, date, wakeupTime, wakeupComment } = data;
  return (
    <li>
      <h1>{date}</h1>
      <p>{name}</p>
      <p>{wakeupTime}</p>
      <p>{wakeupComment}</p>
    </li>
  );
};

export default WakeUpData;
