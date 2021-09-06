import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../../Screens/User";


class UserSection extends Component {
  render() {
    return (
      <User />
    );
  }
}
function bindAction(dispatch) {
  return {

  };
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(UserSection);
