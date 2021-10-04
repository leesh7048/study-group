import React, { useEffect, useState } from "react";

import styles from "./study_time_edit.module.css";

const StudyTimeEdit = ({ today, saveBtnClick }) => {
  const [name, setName] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [studyComment, setStudyComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      date: today,
      name,
      studyTime,
      studyComment,
    };
    saveBtnClick(data);
  };

  useEffect(() => {
    setName("");
    setStudyTime("");
    setStudyComment("");
  }, [today]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>공부시간 편집</h4>
      <form className={styles.study}>
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
          name="studyTime"
          value={studyTime}
          onChange={(e) => setStudyTime(e.target.value)}
          placeholder="studyTime"
        />
        <textarea
          className={styles.input}
          name="studyComment"
          value={studyComment}
          onChange={(e) => setStudyComment(e.target.value)}
          placeholder="studyComment"
        />
        <button className={styles.btn} onClick={onSubmit}>
          저장
        </button>
      </form>
    </div>
  );
};

export default StudyTimeEdit;
