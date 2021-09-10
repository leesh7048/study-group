import React from "react";
import WakeUpData from "../wakeup_data/wakeup_data";
import styles from "./wakeup_time_confirm.module.css";

const WakeUpTimeConfirm = ({ datas }) => {
  return (
    <ul className={styles.wakeupConfirm}>
      {Object.keys(datas).map((key) => (
        <WakeUpData key={key} data={datas[key]} />
      ))}
    </ul>
  );
};

export default WakeUpTimeConfirm;
