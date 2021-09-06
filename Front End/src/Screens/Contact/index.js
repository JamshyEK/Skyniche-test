import React, { Component } from 'react'
import { Button, Card, Row, Col, Table, Form, FormControl } from "react-bootstrap";
import AddContact from './AddContact';
import EditContact from './EditContact'
import './Contact.css'
var dateFormat = require("dateformat");

export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAddContactModal: false,
            showEditContactModal: false,
            page: 0,
            itemList: "",
            search: ""

        }
    }


    componentDidMount() {
        this.props.fetchContact()
    }

    handleClick = () => {
        this.setState({
            showAddContactModal: true

        })
    }

    closeModal = () => {
        this.setState({
            showAddContactModal: false,
            showEditContactModal: false,


        })
    }


    handleDelete = (id) => {
        this.props.deleteContact({
            id: id
        })

    }


    handleUpdate = (item) => {
        this.setState({
            showEditContactModal: true,
            itemList: item
        })
    }


    onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        });


    };

    render() {

        const p = this.state.page + 1
        return (
            <div>
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <h5 className="dash-title">Contact</h5>

                    </Col>
                    <hr />


                </Row>
                <Row className="section-contact">
                    <Col xs={12} sm={12} md={2} lg={2} xl={2} style={{ textAlign: "center" }}>
                        <Button onClick={this.handleClick} className="add-btn">Add New Contact
                        </Button>

                    </Col>

                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>

                            </Form.Group>

                            <Form.Group as={Col} >


                            </Form.Group>

                            <Form.Group as={Col} controlId="search">
                                <Form.Control
                                    type="text"
                                    placeholder="Search" name="search"
                                    value={this.state.search}
                                    onChange={this.onChange} />
                            </Form.Group>
                        </Row>
                        <Table hover responsive className="cmnMainTable">
                            <thead>
                                <tr className="cmnMainTableHd">
                                    <th>NO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>DESIGNATION </th>
                                    <th>JOINING DATE</th>
                                    <th>ACTION </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.ContactList && this.props.ContactList.length > 0 &&

                                    this.props.ContactList.map((item, i) => (
                                        <tr key={i}>
                                            <td>{10 * (p - 1) + i + 1}</td>
                                            <td className="cmn_Cap">
                                                <td>{item && item.name}</td>

                                            </td>

                                            <td className="cmn_Cap">
                                                <td>{item && item.email}</td>
                                            </td>

                                            <td className="cmn_Cap">
                                                <td>{item && item.phone}</td>

                                            </td>
                                            <td className="cmn_Cap">
                                                <td>{item && item.desig}</td>

                                            </td>
                                            <td className="cmn_Cap">
                                                <td>

                                                    {item && item.joinDate &&
                                                        dateFormat(item.joinDate, "mediumDate")}</td>


                                            </td>


                                            <td className="cmnViewIcon">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                    }}
                                                >
                                                    {" "}

                                                    <i
                                                        className="fa fa-trash btn-icon"
                                                        onClick={() =>
                                                            this.handleDelete(item._id)
                                                        }
                                                    ></i>


                                                    <i

                                                        className="fa fa-pencil-square-o btn-icon"
                                                        onClick={() =>
                                                            this.handleUpdate(item)
                                                        }
                                                    ></i>



                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>

                    </Col>

                </Row>
                <AddContact
                    showModal={this.state.showAddContactModal}
                    closeModal={this.closeModal}
                    addContact={this.props.addContact} />

                <EditContact
                    showModal={this.state.showEditContactModal}
                    closeModal={this.closeModal}
                    editContact={this.props.editContact}
                    itemList={this.state.itemList} />






            </div>
        )
    }
}
