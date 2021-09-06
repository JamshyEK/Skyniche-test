import React, { Component } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
export default class UserCard extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <Card
                // style={{ width: '22rem' }}
                >
                    <Card.Body>
                        <div className="main-content">
                            <div>
                                <span className="emp-id">{data.id}</span>
                            </div>

                            {/*  */}
                            <div classname="profile-image">
                                {/* <div id="profileImage"></div> */}
                                <Avatar id="profileImage">   {data.name
                                    .split(" ")
                                    .map((name) => name[0])
                                    .join("")
                                    .toUpperCase()}</Avatar>
                            </div>

                            <h5 className="user-name">{data.name}</h5>
                            <h6 className="titlesec">{data.email}</h6>
                        </div>
                        <Row>
                            <Col className="center-icon" xs={4} sm={4} md={4} lg={4} xl={4}>
                                <i className="fa fa-user icon-clr" aria-hidden="true"></i>
                            </Col>
                            <Col className="center-icon" xs={4} sm={4} md={4} lg={4} xl={4}>
                                <i className="fa fa-eye icon-clr" aria-hidden="true"></i>
                            </Col>
                            <Col className="center-icon" xs={4} sm={4} md={4} lg={4} xl={4}>
                                <i className="fa fa-trash icon-clr" aria-hidden="true"></i>
                            </Col>
                        </Row>
                        <div className="hrline"></div>
                        <Row>
                            <Col className="center-icon" xs={6} sm={6} md={6} lg={6} xl={6}>
                                <h5 className="user-name2">{data.dept}</h5>
                                <h6 className="titlesec2">Department</h6>
                            </Col>
                            <Col className="center-icon" xs={6} sm={6} md={6} lg={6} xl={6}>
                                <h5 className="user-name2">{data.design}</h5>
                                <h6 className="titlesec2">Designation</h6>
                            </Col>
                            <Col className="center-icon" xs={6} sm={6} md={6} lg={6} xl={6}>
                                <h5 className="user-name2">{data.joinDate}</h5>
                                <h6 className="titlesec2">Date of Joining</h6>
                            </Col>
                            <Col className="center-icon" xs={6} sm={6} md={6} lg={6} xl={6}>
                                <h5 className="user-name2">{data.salary}</h5>
                                <h6 className="titlesec2">Salary</h6>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
