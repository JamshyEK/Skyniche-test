import React, { Component } from "react";
import { connect } from "react-redux";
import ForgotPassword from "../../Screens/Forgot Password";


class ForgotPasswordContainer extends Component {
  render() {
    return (
      <ForgotPassword />
    );
  }
}
function bindAction(dispatch) {
  return {

  };
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(ForgotPasswordContainer);
