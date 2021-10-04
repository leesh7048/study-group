import React, { useState } from "react";
import StudyData from "../study_data/study_data";
import styles from "./study_time_confirm.module.css";
import DatePicker from "react-datepicker";
import moment from "moment";

const StudyTimeConfirm = ({ study, studyCreateOrUpdate }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      <ul className={styles.studyTimeConfirm}>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          calendarClassName={styles.calender}
          className={styles.dateInput}
        />
        {study[moment(date).format("YYYY-MM-DD")] ? (
          <StudyData
            study={study[moment(date).format("YYYY-MM-DD")]}
            studyCreateOrUpdate={studyCreateOrUpdate}
          />
        ) : (
          <div>데이터가 없어용</div>
        )}
      </ul>
    </div>
  );
};

export default StudyTimeConfirm;
