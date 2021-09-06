import React, { Component } from 'react'
import { Button, Card, Row, Col, Form } from "react-bootstrap";



export default class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dob: "",
            seconds: "",
            day: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }


    dateDiff = (dob, todayDate) => {
        const oneDay = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todayDate - dob);
        let sec = differenceMs / 1000;
        let day = Math.round(differenceMs / oneDay);



        return { sec: sec, day: day };

        //return todayDate - dob
    }

    onChange = (e) => {

        let todayDate = new Date()
        let dob = new Date(e.target.value)
        let diffDate = this.dateDiff(dob, todayDate)
        this.setState({
            ...this.state,
            dob: e.target.value,
            seconds: diffDate.sec,
            day: diffDate.day,
        })

    };


    //Challege 4



    contacts = [
        { firstName: "Jamshy", lastName: "EK", number: "1234589" },
        { firstName: "Sherlok", lastName: "jhon", number: "1414456789" },
        { firstName: "Kristi ", lastName: "p", number: "133356789" }];







    lookUpProfile = (e, name, props) => {
        e.preventDefault();

        let contact = this.contacts.find((x) => x.firstName === name)
        if (contact && contact[props]) {
            console.log(contact[props])
            return contact[props]
        }

        if (!contact) {
            console.log("No such contact")
            return "No such contact"
        }


        if (contact && !contact[props]) {
            console.log("No such property")
            return "No such property"
        }


    }





    //Challege 5

    
    challegeFive = (e) => {
        e.preventDefault();

        var arr = [1, 3, 5, 7, 9, 11];
        var sum = 17;
        var newArr = [];
        var sum_expected = 0;
        var y = 0;
        while (y < arr.length) {
            for (let i = 0; i < arr.length; i++) {
                var subArr = [];
                sum_expected = arr[i];
                if (arr[i] != 0) subArr.push(arr[i]);
                for (let j = 0; j < arr.length; j++) {
                    if (i == j)
                        continue;
                    sum_expected += arr[j];
                    if (arr[j] != 0) subArr.push(arr[j]);
                    if (sum_expected == sum) {
                        var result = arr.filter((el) => (subArr.indexOf(el) > -1));
                        !newArr.length ? newArr = result : result.length < newArr.length ? newArr = result : 1;
                        break;
                    }
                }
            }
            let x = arr.shift();
            arr.push(x);
            y++;
        }
        if (newArr.length) {
            console.log(newArr);
            console.log(newArr.length)
        } else {
            console.log('Not found');
        }
    }


    render() {

        return (
            <div>
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <h5 className="dash-title">JS Test</h5>
                    </Col>
                    <hr />

                </Row>

                <h3>Challenge 2</h3>




                <Form>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg={4} xl={4}>
                                    <h5>Enter Date of Birth</h5>
                                </Col>
                                <Col lg={4} xl={4}>
                                    <Form.Control
                                        placeholder="Date of Birth"
                                        type="date"
                                        name="dob"
                                        onChange={this.onChange}
                                    />
                                </Col>
                                <Col lg={4} xl={4}>



                                </Col>

                            </Row>

                        </Col>
                        <Col>
                            {this.state.dob ? <h5>Date of Birth is ----  {this.state.dob && this.state.dob}</h5> : null}
                            {this.state.day ? <h5>Days ----  {this.state.day && this.state.day}</h5> : null}
                            {this.state.seconds ? <h5>Seconds ----  {this.state.seconds && this.state.seconds}</h5> : null}
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                    <h3>Challenge 4</h3>
                    <p>Output in console</p>
                        <Button onClick={(e) => this.lookUpProfile(e, "Jamshy", "lastName")} className="add-btn r-alin" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                    <hr />
                    <Row>
                    <h3>Challenge 5</h3>
                    <p>Output in console</p>
                        <Button onClick={(e) => this.challegeFive(e)} className="add-btn r-alin" variant="primary" type="submit">
                        Submit
                        </Button>
                    </Row>
                </Form>




            </div>
        )
    }
}
