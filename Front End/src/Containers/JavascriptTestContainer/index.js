import React, { Component } from "react";
import { connect } from "react-redux";
import JavascriptTest from "../../Screens/JavascriptTest";


class JavascriptTestSection extends Component {
  render() {
    return (
      <JavascriptTest />
    );
  }
}
function bindAction(dispatch) {
  return {

  };
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(JavascriptTestSection);
