import React, { Component } from "react";
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: "",
        password: ""
      },
      errormsg: {
        emailerr: "",
        passworderr: ""
      }
    };
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      value: {
        ...this.state.value,
        [name]: value
      },
      errormsg: {
        ...this.state.errormsg,
        emailerr: "",
        passworderr: ""
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      console.log("validation success");
      this.props.login(this.state.value);
    } else {
      console.log("validation failed");
    }
  };

  validate = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.value.email === "" && this.state.value.password === "") {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "Email is required",
          passworderr: "Password is required"
        }
      });
      return false;
    }
    if (this.state.value.email === "") {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "Email is required",
          passworderr: ""
        }
      });
      return false;
    } else if (!re.test(this.state.value.email)) {
      this.setState({
        ...this.state,

        errormsg: {
          ...this.state.errormsg,
          emailerr: "Invalid credential",
          passworderr: ""
        }
      });
      return false;
    } else if (this.state.value.password === "") {
      this.setState({
        ...this.state,

        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: "Password is required"
        }
      });
      return false;
    } else if (this.state.value.password.length < 6) {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "Invalid credential",
          passworderr: ""
        }
      });
      return false;
    } else {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: ""
        }
      });
      return true;
    }
  };

  render() {
    return (


      <div className="bgcolorLogin container-fluid">
        <div>
          <div>
            <Container>

              <div className="cardMainlogin">
                <div className="companyicon">
                  <Image className="companylogo" src={"../../assets/images/company.png"} />
                </div>
                <div className="loginsection" >
                  <h3 className="title">Login</h3>
                  <h6 className="titlesec">Sign in to your account to continue</h6>

                  <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text><i class="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Email" />
                      </InputGroup>
                      {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                          <Form.Label>Password</Form.Label>
                        </Col>
                        <Col sm={8} md={8} lg={8} xl={8}>
                          <Link to="/forgotpassword" className="forgotPswd">
                            <h6 className="forgot-title">Forgot Your Password?</h6>
                          </Link>

                        </Col>
                      </Row>


                      <InputGroup className="mb-2">
                        <InputGroup.Text><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
                        <FormControl type="password" id="inlineFormInputGroup" placeholder="Username" />
                      </InputGroup>
                    </Form.Group>
                    <Link to="/dashboard" className="forgotPswd">
                      <Button className="cmn-btn" variant="primary" type="submit">
                        Sign in
                      </Button>
                    </Link>

                  </Form>
                </div>


              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
