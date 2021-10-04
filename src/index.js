import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import styles from "./index.module.css";
import AuthService from "./service/auth_service";
import DataRepository from "./service/data_repository";
import "react-datepicker/dist/react-datepicker.css";

const authService = new AuthService();
const dataRepository = new DataRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} dataRepository={dataRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
