import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ menuClick, clickBtn }) => {
  const menuClicked = clickBtn && styles.clicked;

  return (
    <div className={styles.navbar}>
      <button className={`${styles.button} ${menuClicked}`} onClick={menuClick}>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
      </button>
      <h1 className={styles.title}>study group</h1>
    </div>
  );
};

export default Navbar;
