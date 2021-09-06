import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
export default class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            propsValue: {},
            value: {},
        };
    }



    static getDerivedStateFromProps(nextProps, prevState) {


        if (nextProps.itemList && nextProps.itemList !== prevState.propsValue) {

            return {
                propsValue: nextProps.itemList && nextProps.itemList,
                value: {
                    _id: nextProps.itemList && nextProps.itemList._id,
                    name: nextProps.itemList && nextProps.itemList.name,
                    email: nextProps.itemList && nextProps.itemList.email,
                    phone: nextProps.itemList && nextProps.itemList.phone,
                    desig: nextProps.itemList && nextProps.itemList.desig,
                    joinDate: nextProps.itemList && nextProps.itemList.joinDate
                },
            };
        }

        return {};
    }

    closeModal = (e) => {
        //e.preventDefault();
        this.props.closeModal()
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            value: {
                ...this.state.value,
                [name]: value,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.state.value)
        this.closeModal()
    }
    render() {

        console.log(this.state, "-=-=-=-=-=-=-=-=-=-====")
        return (
            <div>
                <Modal show={this.props.showModal}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-title">Update Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group className="mb-3" controlId="formGridAddress1">

                                <Form.Control placeholder="Type Name"

                                    name="name"

                                    onChange={this.onChange}
                                    value={this.state.value.name} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">

                                <Form.Control placeholder="Email"
                                    name="email"

                                    onChange={this.onChange}
                                    value={this.state.value.email} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">

                                <Form.Control placeholder="Phone"
                                    name="phone"

                                    onChange={this.onChange}
                                    value={this.state.value.phone} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">

                                <Form.Control placeholder="Designation" name="desig"

                                    onChange={this.onChange}
                                    value={this.state.value.desig} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">

                                <Form.Control onChange={this.onChange}
                                    type="date" name="joinDate"
                                    value={this.state.value.joinDate}
                                    placeholder="Date of Joining" />
                            </Form.Group>


                            <Button onClick={this.closeModal} className="r-alin" variant="secondary" type="submit">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} className="add-btn r-alin" variant="primary" type="submit">
                                Update
                            </Button>

                        </Form>
                    </Modal.Body>

                </Modal>

            </div>
        )
    }
}
