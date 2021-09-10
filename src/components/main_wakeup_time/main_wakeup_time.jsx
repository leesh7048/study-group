import React, { useEffect, useState } from "react";
import styles from "./main_wakeup_time.module.css";
import moment from "moment";

const MainWakeUpTime = ({ dataRepository }) => {
  const [todayWakeupDatas, setTodayWakeupDatas] = useState([]);
  const [today, setToday] = useState(moment(new Date()).format("YYYY-MM-DD"));
  useEffect(() => {
    const stopSync = dataRepository.getDatas((datas) => {
      setTodayWakeupDatas(datas);
    });

    return () => stopSync();
  }, []);

  console.log(todayWakeupDatas);

  return <div className={styles.container}>s</div>;
};

export default MainWakeUpTime;
