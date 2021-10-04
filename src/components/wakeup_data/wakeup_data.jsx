import React, { useState } from "react";
import styles from "./wakeup_data.module.css";

const WakeUpData = ({ wakeup, wakeupCreateOrUpdate }) => {
  const { date } = wakeup;
  const [isEditMode, setIsEditMode] = useState(false);

  const [name, setName] = useState(wakeup.name);
  const [wakeupTime, setWakeupTime] = useState(wakeup.wakeupTime);
  const [wakeupComment, setWakeupComment] = useState(wakeup.wakeupComment);

  function handleSaveClick() {
    wakeupCreateOrUpdate({
      date,
      name,
      wakeupTime,
      wakeupComment,
    });

    setIsEditMode(false);
  }

  return (
    <li className={styles.wakeupData}>
      <h1>{date}</h1>
      {isEditMode ? (
        <input
          className={styles.wakeupInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p>이름: {name}</p>
      )}
      {isEditMode ? (
        <input
          className={styles.wakeupInput}
          value={wakeupTime}
          onChange={(e) => setWakeupTime(e.target.value)}
        />
      ) : (
        <p>기상시간: {wakeupTime}</p>
      )}
      {isEditMode ? (
        <input
          className={styles.wakeupInput}
          value={wakeupComment}
          onChange={(e) => setWakeupComment(e.target.value)}
        />
      ) : (
        <p>한마디: {wakeupComment}</p>
      )}

      {isEditMode ? (
        <button className={styles.saveBtn} onClick={handleSaveClick}>
          저장
        </button>
      ) : (
        <button className={styles.saveBtn} onClick={() => setIsEditMode(true)}>
          수정
        </button>
      )}
    </li>
  );
};

export default WakeUpData;
