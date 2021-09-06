import React, { Component } from 'react'
import { Card, Row, Col, Image } from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';
export default class DiamondCard extends Component {
    render() {
        const { data } = this.props
        const img_path = "../../assets/images/"
        return (
            <div>
                <Card
                >
                    <Card.Body>
                        <div className="main-content">

                            <div classname="profile-image">
                                <Image className="imgDiamond" src={img_path + data.img} rounded />
                            </div>

                            <h5 className="user-name">{data.clarity}{" "}{data.color}{" "}{data.carat}{" "}{data.shape}{" "}{data.name}</h5>
                            <h6 className="titlesec">{data.price}</h6>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}
