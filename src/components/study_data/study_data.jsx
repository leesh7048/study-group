import React, { useState } from "react";

import styles from "./study_data.module.css";

const StudyData = ({ study, studyCreateOrUpdate }) => {
  const { date } = study;
  const [isEditMode, setIsEditMode] = useState(false);

  const [name, setName] = useState(study.name);
  const [studyTime, setStudyTime] = useState(study.studyTime);
  const [studyComment, setStudyComment] = useState(study.studyComment);

  function handleSaveClick() {
    studyCreateOrUpdate({
      date,
      name,
      studyTime,
      studyComment,
    });

    setIsEditMode(false);
  }

  return (
    <li className={styles.studyData}>
      <h1>{date}</h1>
      {isEditMode ? (
        <input
          className={styles.studyInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p>이름: {name} </p>
      )}
      {isEditMode ? (
        <input
          className={styles.studyInput}
          value={studyTime}
          onChange={(e) => setStudyTime(e.target.value)}
        />
      ) : (
        <p>공부시간: {studyTime}</p>
      )}
      {isEditMode ? (
        <input
          className={styles.studyInput}
          value={studyComment}
          onChange={(e) => setStudyComment(e.target.value)}
        />
      ) : (
        <p>한마디: {studyComment}</p>
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

export default StudyData;
