import React, { useEffect, useState } from "react";
import styles from "./all_time_confirm.module.css";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import WakeUpTimeEdit from "../wakeup_time/wakeup_time_edit";
import StudyTimeEdit from "../study_time/study_time_edit";
import WakeUpTimeConfirm from "../wakeup_time_confirm/wakeup_time_confirm";
import { useHistory } from "react-router-dom";
import StudyTimeConfirm from "../study_time_confirm/study_time_confirm";

const AllTimeConfirm = ({ authService, dataRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const today = moment(new Date()).format("YYYY-MM-DD");
  const [wakeup, setWakeup] = useState({});
  const [study, setStudy] = useState({});

  const [userId, setUserId] = useState(historyState && historyState.id);

  useEffect(() => {
    if (!userId) {
      return;
    } else {
      const wakeupStopSync = dataRepository.syncWakeup(userId, (wakeup) => {
        setWakeup(wakeup);
      });
      return () => wakeupStopSync();
    }
  }, [userId, dataRepository]);

  useEffect(() => {
    if (!userId) {
      return;
    } else {
      const studyStopSync = dataRepository.syncStudy(userId, (study) => {
        setStudy(study);
      });
      return () => studyStopSync();
    }
  }, [userId, dataRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);

  const wakeupCreateOrUpdate = (data) => {
    const updated = { ...wakeup };
    const today = data.date;
    updated[today] = data;
    setWakeup(updated);
    dataRepository.saveWakeup(userId, data);
  };
  const studyCreateOrUpdate = (data) => {
    const updated = { ...study };
    const today = data.date;
    updated[today] = data;
    setStudy(updated);
    dataRepository.saveStudy(userId, data);
  };

  return (
    <section className={styles.main}>
      <div className={styles.wakeup}>
        <WakeUpTimeEdit saveBtnClick={wakeupCreateOrUpdate} today={today} />
        <WakeUpTimeConfirm
          wakeup={wakeup}
          wakeupCreateOrUpdate={wakeupCreateOrUpdate}
        />
      </div>
      <div className={styles.study}>
        <StudyTimeEdit saveBtnClick={studyCreateOrUpdate} today={today} />
        <StudyTimeConfirm
          study={study}
          studyCreateOrUpdate={studyCreateOrUpdate}
        />
      </div>
    </section>
  );
};

export default AllTimeConfirm;
