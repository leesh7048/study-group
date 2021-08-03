import React from "react";
import Navbar from "../navbar/navbar";
import StudyTime from "../study_time/study_time";
import WakeUpTime from "../wake_up_time/wake_up_time";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <section className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <WakeUpTime />
        <StudyTime />
      </div>
    </section>
  );
};

export default Main;
