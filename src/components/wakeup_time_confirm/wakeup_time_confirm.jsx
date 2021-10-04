import React, { useState } from "react";
import WakeUpData from "../wakeup_data/wakeup_data";
import styles from "./wakeup_time_confirm.module.css";
import DatePicker from "react-datepicker";
import moment from "moment";

const WakeUpTimeConfirm = ({ wakeup, wakeupCreateOrUpdate }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      <ul className={styles.wakeupConfirm}>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          calendarClassName={styles.calender}
          className={styles.dateInput}
        />
        {wakeup[moment(date).format("YYYY-MM-DD")] ? (
          <WakeUpData
            wakeup={wakeup[moment(date).format("YYYY-MM-DD")]}
            wakeupCreateOrUpdate={wakeupCreateOrUpdate}
          />
        ) : (
          <div>데이터가 없어용</div>
        )}
      </ul>
    </div>
  );
};

export default WakeUpTimeConfirm;
