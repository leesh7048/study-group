import React from "react";
import { Link } from "react-router-dom";
import styles from "./left_drawer.module.css";

const LeftDrawer = ({ clickBtn, onLogout, onClick }) => {
  const display = clickBtn === "open" ? styles.open : styles.close;

  return (
    <nav className={`${styles.leftDrawer} ${display}`}>
      <Link to="/main">
        <div className={styles.item} onClick={onClick}>
          홈
        </div>
      </Link>
      <Link to="/all_time_confirm">
        <div className={styles.item} onClick={onClick}>
          나의 시간 확인
        </div>
      </Link>

      <div className={styles.item} onClick={onLogout}>
        로그아웃
      </div>
    </nav>
  );
};

export default LeftDrawer;
