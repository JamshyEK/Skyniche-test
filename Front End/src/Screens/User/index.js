import React, { Component } from 'react'
import { Button, Card, Row, Col } from "react-bootstrap";
import UserCard from './UserCard';
import AddUser from './AddUser';
import './Users.css'
import data from '../../data'


export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAddUserModal: false
        }
    }

    handleClick = () => {
        this.setState({
            showAddUserModal: true

        })
    }

    closeModal = () => {
        this.setState({
            showAddUserModal: false

        })
    }

    render() {

        return (
            <div>
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <h5 className="dash-title">Employee</h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button onClick={this.handleClick} className="plus-btn"><i class="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                    </Col>

                </Row>
                <Row>
                    {data.data.map((x) =>
                        <Col key={x.id} sm={12} md={6} lg={4} xl={3}>
                            <UserCard data={x} />
                        </Col>
                    )}

                </Row>
                <AddUser showModal={this.state.showAddUserModal} closeModal={this.closeModal} />






            </div>
        )
    }
}
