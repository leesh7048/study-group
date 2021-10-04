import React, { useEffect, useState } from "react";
import moment from "moment";

import styles from "./main_study_time.module.css";

const MainStudyTime = ({ dataRepository }) => {
  const [todayStudy, setTodayStudy] = useState([]);
  const today = moment(new Date()).format("YYYY-MM-DD");
  useEffect(() => {
    const stopSync = dataRepository.getStudy((datas) => {
      setTodayStudy(datas.map((item) => item && item[today]));
    });
    return () => stopSync();
  }, [dataRepository, today]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today Study Time</h1>
      <ul className={styles.data}>
        {todayStudy.map(
          (study) =>
            study && (
              <li key={study.date} className={styles.items}>
                <h1>{study.date}</h1>
                <p>이름: {study.name}</p>
                <p>공부시간: {study.studyTime}</p>
                <p>한마디: {study.studyComment}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MainStudyTime;
