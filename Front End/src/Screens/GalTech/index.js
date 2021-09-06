import React, { Component } from 'react'
import Diamond from './diamond.json'
import DiamondCard from './DiamondCard'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Button, ButtonToolbar, ButtonGroup, Card, Form, Row, Col } from "react-bootstrap";
import { SliderRail, Handle, Track, Tick } from "./components";
import './Diamond.css'


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diamondsList: "",
            priceStart: "",
            priceEnd: "",
            caratStart: "",
            caratEnd: "",
        }
    }

    componentDidMount() {
        this.setState({
            diamondsList: Diamond
        })
    }


    shapeFilter = (e, data) => {
        let diamonds = Diamond
        this.setState({
            diamondsList: diamonds.filter(x => x.shape === e.target.name)
        })

    }


    handleChange = (e, type) => {
        let diamonds = Diamond
        console.log(e.target.value)
        switch (type) {
            case "color":
                this.setState({
                    diamondsList: diamonds.filter(x => x.color === e.target.value)
                })
                break
            case "cut":
                this.setState({
                    diamondsList: diamonds.filter(x => x.cut === e.target.value)
                })
                break
            case "clarity":
                this.setState({
                    diamondsList: diamonds.filter(x => x.clarity === e.target.value)
                })
                break
        }

    }


    onChange = (e) => {
        let diamonds = Diamond
        this.setState({
            priceStart: e[0],
            priceEnd: e[1],
            diamondsList: diamonds.filter(x => x.price >= e[0] && x.price <= e[1])
        })
    }


    onChangeCarat = (e) => {
        console.log(e)
        let diamonds = Diamond
        this.setState({
            caratStart: e[0],
            caratEnd: e[1],
            diamondsList: diamonds.filter(x => x.carat >= e[0] && x.carat <= e[1])
        })
    }

    render() {
        const domain = [100, 50000];
        const defaultValues = [0, 50000];
        const domainCarat = [0.1, 30];
        const defaultValuesCarat = [0, 30];
        const sliderStyle = {
            position: "relative",
            width: "100%"
        };
        return (


            <div>
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <h5 className="dash-title">Diamonds</h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>

                    </Col>

                </Row>
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Shape</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="me-2" aria-label="First group">
                                        <Button variant="secondary" name="round" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Round</Button>
                                        <Button variant="secondary" name="princess" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Princess</Button>
                                        <Button variant="secondary" name="emerald" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Emerald</Button>
                                        <Button variant="secondary" name="radiant" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Radiant</Button>
                                        <Button variant="secondary" name="oval" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Oval</Button>
                                        <Button variant="secondary" name="pear" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Pear</Button>
                                        <Button variant="secondary" name="heart" onClick={(e) => this.shapeFilter(e, this.state.diamondsList)}>Heart</Button>
                                    </ButtonGroup>

                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Cut</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                <select

                                    value={this.state.filterValue}
                                    onChange={(e) => this.handleChange(e, "cut")}
                                    className="form-control"
                                >
                                    <option value="good">Good</option>
                                    <option value="verygood">Very Good</option>
                                    <option value="excellent">Excellent</option>
                                </select>


                            </Col>
                        </Row>
                    </Col>

                </Row>
                <hr />
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Color</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>

                                <select

                                    value={this.state.filterValue}
                                    onChange={(e) => this.handleChange(e, "color")}
                                    className="commonFilterSelect form-control"
                                >
                                    <option value="a">A</option>
                                    <option value="c">C </option>
                                    <option value="e">E</option>
                                    <option value="g">G</option>
                                    <option value="i">I </option>
                                    <option value="k">K</option>
                                    <option value="m">M</option>
                                    <option value="o">O </option>
                                    <option value="s">S</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Carat</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>



                                <div style={{ margin: "10%", height: 10, width: "80%" }}>
                                    <Slider
                                        mode={2}
                                        step={1}
                                        domain={domainCarat}
                                        rootStyle={sliderStyle}
                                        onUpdate={this.onUpdate}
                                        onChange={this.onChangeCarat}
                                        values={defaultValuesCarat}
                                    >
                                        <Rail>
                                            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                                        </Rail>
                                        <Handles>
                                            {({ handles, getHandleProps }) => (
                                                <div className="slider-handles">
                                                    {handles.map((handle) => (
                                                        <Handle
                                                            key={handle.id}
                                                            handle={handle}
                                                            domain={domain}
                                                            getHandleProps={getHandleProps}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </Handles>
                                        <Tracks left={false} right={false}>
                                            {({ tracks, getTrackProps }) => (
                                                <div className="slider-tracks">
                                                    {tracks.map(({ id, source, target }) => (
                                                        <Track
                                                            key={id}
                                                            source={source}
                                                            target={target}
                                                            getTrackProps={getTrackProps}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </Tracks>
                                        <Ticks count={5}>
                                            {({ ticks }) => (
                                                <div className="slider-ticks">
                                                    {ticks.map((tick) => (
                                                        <Tick key={tick.id} tick={tick} count={ticks.length} />
                                                    ))}
                                                </div>
                                            )}
                                        </Ticks>
                                    </Slider>

                                </div>
                                <Row style={{ margin: "10%", height: 10, width: "80%" }}>
                                    <Col>
                                        <Form.Control value={this.state.caratStart} placeholder="Start" />
                                    </Col>
                                    <Col>
                                        <Form.Control value={this.state.caratEnd} placeholder="End" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                <hr />
                <Row>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Clarity</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                <select

                                    value={this.state.filterValue}
                                    onChange={(e) => this.handleChange(e, "clarity")}
                                    className="commonFilterSelect form-control"
                                >
                                    <option value="s11">S11</option>
                                    <option value="s12">S12</option>
                                    <option value="s13">S13</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>Price</Col>
                            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                <div style={{ margin: "10%", height: 10, width: "80%" }}>
                                    <Slider
                                        mode={2}
                                        step={1}
                                        domain={domain}
                                        rootStyle={sliderStyle}
                                        onUpdate={this.onUpdate}
                                        onChange={this.onChange}
                                        values={defaultValues}
                                    >
                                        <Rail>
                                            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                                        </Rail>
                                        <Handles>
                                            {({ handles, getHandleProps }) => (
                                                <div className="slider-handles">
                                                    {handles.map((handle) => (
                                                        <Handle
                                                            key={handle.id}
                                                            handle={handle}
                                                            domain={domain}
                                                            getHandleProps={getHandleProps}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </Handles>
                                        <Tracks left={false} right={false}>
                                            {({ tracks, getTrackProps }) => (
                                                <div className="slider-tracks">
                                                    {tracks.map(({ id, source, target }) => (
                                                        <Track
                                                            key={id}
                                                            source={source}
                                                            target={target}
                                                            getTrackProps={getTrackProps}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </Tracks>
                                        <Ticks count={5}>
                                            {({ ticks }) => (
                                                <div className="slider-ticks">
                                                    {ticks.map((tick) => (
                                                        <Tick key={tick.id} tick={tick} count={ticks.length} />
                                                    ))}
                                                </div>
                                            )}
                                        </Ticks>
                                    </Slider>

                                </div>
                                <Row style={{ margin: "10%", height: 10, width: "80%" }}>
                                    <Col>
                                        <Form.Control value={this.state.priceStart} placeholder="Start" />
                                    </Col>
                                    <Col>
                                        <Form.Control value={this.state.priceEnd} placeholder="End" />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>

                </Row>
                <hr />
                <Row>
                    {this.state.diamondsList && this.state.diamondsList.map((x) =>
                        <Col key={x.id} sm={12} md={6} lg={4} xl={3}>
                            <DiamondCard data={x} />
                        </Col>
                    )}

                </Row>







            </div>
        )
    }
}
