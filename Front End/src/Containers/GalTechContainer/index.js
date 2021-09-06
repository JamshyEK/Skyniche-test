import React, { Component } from "react";
import { connect } from "react-redux";
import GalTech from "../../Screens/GalTech";



class GalTechSection extends Component {
    render() {
        return (
            <GalTech />
        );
    }
}
function bindAction(dispatch) {
    return {


    };
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, bindAction)(GalTechSection);
