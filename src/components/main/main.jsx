import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainStudyTime from "../main_study_time/main_study_time";
import MainWakeUpTime from "../main_wakeup_time/main_wakeup_time";

import styles from "./main.module.css";

const Main = ({ dataRepository }) => {
  return (
    <section className={styles.main}>
      <MainWakeUpTime dataRepository={dataRepository} />
      <MainStudyTime />
    </section>
  );
};

export default Main;
