import React, { Component } from 'react'
import { Modal, Button,Form, Row, Col } from "react-bootstrap";
export default class AddUser extends Component {


    closeModal = () => {
        this.props.closeModal()
    }
    render() {
        return (
            <div>
                <Modal show={this.props.showModal}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-title">Create New Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  />
                            </Form.Group>
                            <Button className="cmn-btn" variant="primary" type="submit">
                      Create
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
