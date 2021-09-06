import React from "react";
import {
  Route,
  Switch
  //Redirect
} from "react-router-dom";

import Login from "../Containers/LoginContainer";
import ForgotPassword from '../Containers/Forgot Password Conatiner'
import DefaultLayout from "../Containers/DefaultLayoutContainer/defaultLayout";

function AppNavigator() {
  return (
    <Switch>
      <Route path="/login" name="Login" component={Login} />
      <Route path="/forgotpassword" name="Forgot Password" component={ForgotPassword} />
      <Route path="/" name="DefaultLayout" component={DefaultLayout} />
    </Switch>
  );
}
export default AppNavigator;
