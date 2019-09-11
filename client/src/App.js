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
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/UI/Landing";
import Dashboard from "./components/UI/Dashboard";

import Staffs from "./components/staff/Staffs";
import AddStaff from "./components/staff/AddStaff";
import EditStaff from "./components/staff/EditStaff";

import Customers from "./components/customer/Customers";
import AddCustomer from "./components/customer/AddCustomer";
import EditCustomer from "./components/customer/EditCustomer";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  let routes = (
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/addStaff" component={AddStaff} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/staffs" component={Staffs} />
      </Switch>
      <Switch>
        <PrivateRoute exact path={`/editStaff/:id`} component={EditStaff} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/customers" component={Customers} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/addCustomer" component={AddCustomer} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/editCustomer/:id`}
          component={EditCustomer}
        />
      </Switch>
    </Fragment>
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
