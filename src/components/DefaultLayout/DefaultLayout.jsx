import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import LeftDrawer from "../left_drawer/left_drawer";
import Navbar from "../navbar/navbar";
import styles from "./DefaultLayout.module.css";

const DefaultLayout = ({ children, authService, cardRepasitory }) => {
  const history = useHistory();

  const [clickBtn, setClickBtn] = useState(false);
  const menuClick = (e) => {
    !clickBtn ? setClickBtn(true) : setClickBtn(false);
  };
  const { pathname } = useLocation();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, []);

  const onMenuClick = () => {
    setClickBtn(false);
  };

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <section className={styles.main}>
      <Navbar menuClick={menuClick} clickBtn={clickBtn} />
      <div className={styles.container}>
        <LeftDrawer
          onLogout={onLogout}
          onClick={onMenuClick}
          clickBtn={clickBtn ? "open" : "close"}
        />
        {children}
      </div>
    </section>
  );
};

export default DefaultLayout;
