import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService.login().then((data) => goToMain(data.user.uid));
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  }, [authService]);

  return (
    <section className={styles.login}>
      <header className={styles.header}>Study Group Login</header>
      <section className={styles.main}>
        <h1>Google Login</h1>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
      </section>
      <footer className={styles.footer}>hello!</footer>
    </section>
  );
};

export default Login;
