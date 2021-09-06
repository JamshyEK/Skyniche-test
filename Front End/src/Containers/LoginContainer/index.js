import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../../Screens/Login";


class LoginSection extends Component {
  render() {
    return (
      <Login />
    );
  }
}
function bindAction(dispatch) {
  return {

  };
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(LoginSection);
