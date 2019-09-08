import React, { Fragment, useEffect } from "react";
import "./App.css";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./_actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./utils/PrivateRoute";

import Alert from "./components/UI/Alert";
import Sidebar from "./components/UI/Sidebar";
import Staff from "./components/staff/Staff";
import AddStaff from "./components/staff/AddStaff";
import Dashboard from "./components/UI/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/UI/Landing";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  let routes = (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/addStaff" component={AddStaff} />
      <PrivateRoute exact path="/staff" component={Staff} />
    </Switch>
  );
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Sidebar>{routes}</Sidebar>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
