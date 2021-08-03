import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.login}>
      <header className={styles.header}>Study Group Login</header>
      <section className={styles.main}>
        <h1>Google Login</h1>
        <button className={styles.button}>Google</button>
      </section>
      <footer className={styles.footer}>hello!</footer>
    </section>
  );
};

export default Login;
