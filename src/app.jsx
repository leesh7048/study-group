import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import AllTimeConfirm from "./components/all_time_confirm/all_time_confirm";

import Login from "./components/login/login";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import Main from "./components/main/main";

function App({ authService, dataRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <DefaultLayout authService={authService}>
          <Switch>
            <Route exact path="/">
              <Login authService={authService} />
            </Route>
            <Route path="/main">
              <Main dataRepository={dataRepository} />
            </Route>
            <Route path="/all_time_confirm">
              <AllTimeConfirm
                authService={authService}
                dataRepository={dataRepository}
              />
            </Route>
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
