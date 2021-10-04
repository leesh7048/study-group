import React, { useEffect, useState } from "react";
import styles from "./main_wakeup_time.module.css";
import moment from "moment";

const MainWakeUpTime = ({ dataRepository }) => {
  const [todayWakeup, setTodayWakeup] = useState([]);
  const today = moment(new Date()).format("YYYY-MM-DD");
  useEffect(() => {
    const stopSync = dataRepository.getWakeup((datas) => {
      setTodayWakeup(datas.map((item) => item[today]));
    });
    return () => stopSync();
  }, [dataRepository, today]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today Wakeup Time</h1>
      <ul className={styles.data}>
        {todayWakeup.map(
          (wakeup) =>
            wakeup && (
              <li
                className={styles.items}
                key={wakeup.date + wakeup.wakeupComment}
              >
                <h1>{wakeup?.date}</h1>
                <p>이름: {wakeup?.name}</p>
                <p>공부시간: {wakeup?.wakeupTime}</p>
                <p>한마디: {wakeup?.wakeupComment}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MainWakeUpTime;
