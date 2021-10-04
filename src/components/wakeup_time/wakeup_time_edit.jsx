import React, { useState } from "react";

import styles from "./wakeup_time_edit.module.css";

const WakeUpTimeEdit = ({ saveBtnClick, today }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [wakeupTime, setWakeupTime] = useState("");
  const [wakeupComment, setWakeupComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      date: today,
      name,
      wakeupTime,
      wakeupComment,
    };
    saveBtnClick(data);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>기상시간 편집</h4>
      <form className={styles.wakeup}>
        <p className={styles.date}>{today}</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          className={styles.input}
          type="text"
          name="wakeupTime"
          value={wakeupTime}
          onChange={(e) => setWakeupTime(e.target.value)}
          placeholder="wakeupTime"
        />
        <textarea
          className={styles.input}
          name="wakeupComment"
          value={wakeupComment}
          onChange={(e) => setWakeupComment(e.target.value)}
          placeholder="wakeupComment"
        />
        <button className={styles.btn} onClick={onSubmit}>
          저장
        </button>
      </form>
    </div>
  );
};

export default WakeUpTimeEdit;
