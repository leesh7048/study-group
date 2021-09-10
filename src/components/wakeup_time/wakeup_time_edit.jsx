import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

import styles from "./wakeup_time_edit.module.css";

const WakeUpTimeEdit = ({ saveBtnClick, datas, today }) => {
  const [name, setName] = useState("");
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

  useEffect(() => {
    setName("");
    setWakeupTime("");
    setWakeupComment("");
  }, [today]);

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
          {datas ? "수정하기" : "저장하기"}
        </button>
      </form>
    </div>
  );
};

export default WakeUpTimeEdit;
