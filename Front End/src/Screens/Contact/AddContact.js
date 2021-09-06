import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
export default class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            value: {
                name: "",
                email: "",
                phone: "",
                desig: "",
                joinDate:""
            },


        };
    }

    closeModal = (e) => {
        //e.preventDefault();
        this.props.closeModal()
    }

    onChange = (e) => {
        console.log(e.target.value)
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
        this.props.addContact(this.state.value)
        this.setState({
            name: "",
            email: "",
            phone: "",
            desig: "",
            joinDate:""
        })
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
                        <Modal.Title className="modal-title">Add New Contact</Modal.Title>
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
                                <Form.Control name="desig" onChange={this.onChange}
                                    value={this.state.value.desig} placeholder="Designation" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control onChange={this.onChange} type="date" name="joinDate"
                                    placeholder="Date of Joining" />
                            </Form.Group>


                            <Button onClick={this.closeModal} className="r-alin" variant="secondary" type="submit">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} className="add-btn r-alin" variant="primary" type="submit">
                                Save
                            </Button>

                        </Form>
                    </Modal.Body>

                </Modal>














                {/* <div >
                                <hr />
                            </div> */}


                {/* 
                    </Modal.Body>

                </Modal>  */}
            </div>
        )
    }
}
