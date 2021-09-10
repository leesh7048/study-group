import React, { useEffect, useState } from "react";
import styles from "./all_time_confirm.module.css";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import WakeUpTimeEdit from "../wakeup_time/wakeup_time_edit";
import StudyTimeEdit from "../study_time/study_time_edit";
import WakeUpTimeConfirm from "../wakeup_time_confirm/wakeup_time_confirm";
import { useHistory } from "react-router-dom";

const AllTimeConfirm = ({ authService, dataRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  console.log(history);

  const [today, setToday] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [datas, setDatas] = useState({});

  const [userId, setUserId] = useState(historyState && historyState.id);

  useEffect(() => {
    if (!userId) {
      return;
    } else {
      const stopSync = dataRepository.syncDatas(userId, (datas) => {
        setDatas(datas);
      });

      return () => stopSync();
    }
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setToday("2021-08-26");
  //   }, 10000);
  // }, []);

  const dataCreateOrUpdate = (data) => {
    const updated = { ...datas };
    updated[data.date] = data;
    setDatas(updated);
    dataRepository.saveData(userId, data);
  };

  return (
    <section className={styles.main}>
      <div className={styles.wakeup}>
        <WakeUpTimeEdit
          datas={datas}
          saveBtnClick={dataCreateOrUpdate}
          today={today}
        />
        <WakeUpTimeConfirm datas={datas} />
      </div>
      <div className={styles.study}>
        <StudyTimeEdit />
      </div>
    </section>
  );
};

export default AllTimeConfirm;
