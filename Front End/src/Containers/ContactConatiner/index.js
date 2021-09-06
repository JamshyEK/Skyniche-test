import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "../../Screens/Contact";
import { fetchContact, addContact ,deleteContact,editContact,searchContact} from './action'


class ContactSection extends Component {
    render() {
        return (
            <Contact fetchContact={this.props.fetchContact}
                ContactList={this.props.ContactList}
                addContact={this.props.addContact} 
                deleteContact={this.props.deleteContact}
                editContact={this.props.editContact}
                searchContact={this.props.searchContact}/>
        );
    }
}
function bindAction(dispatch) {
    return {
        fetchContact: (value) => {
            dispatch(fetchContact(value))
        },
        addContact: (value) => {
            dispatch(addContact(value))
        },
        deleteContact: (value) => {
            dispatch(deleteContact(value))
        },
        editContact: (value) => {
            dispatch(editContact(value))
        },
        searchContact: (value) => {
            dispatch(searchContact(value))
        }

    };
}
const mapStateToProps = (state) => ({
    ContactList: state.ContactReducer.ContactList,
});

export default connect(mapStateToProps, bindAction)(ContactSection);
