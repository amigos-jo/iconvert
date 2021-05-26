import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";
import { SiConvertio } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { ImProfile } from "react-icons/im";



export class CardsHome extends Component {
    render() {
        return (
            <>
                <div className="class my-5">
                    <h4>The advantages of the iconvert in terms of the principle of work and the way to use the user for this site</h4>
                </div>

                <section className="section section-lg pt-lg-0 mt--200">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <Row className="row-grid">
                                    <Col lg="4">
                                        <Card className="shadow">
                                            <CardBody className="py-5">
                                                <SiConvertio size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6 text-uppercase">Convert</h5>

                                                <p className="paragraphEdit mt-4">
                                                    This site enables the user to convert currencies and compare them to other currencies in terms of prices and how to convert them.   </p>
                                                <div className='buttonEdit'>
                                                    <Button
                                                        className="editContent mt-4 px-5 shadow "
                                                        color="outline-primary"
                                                        href="#"
                                                    > Try it !</Button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow ">
                                            <CardBody className="py-5">
                                                <FaChartLine size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6  text-uppercase">Chart</h5>
                                                <p className=" paragraphEdit description mt-4">
                                                    Also, you can see a graph of currencies and the rise or fall of their prices compared to the currencies over the past 30 days.   </p>
                                                <div className='buttonEdit'>
                                                    <Button
                                                        className=" mt-4 px-5 shadow"
                                                        color="outline-primary"
                                                        href="#"
                                                    > View it !</Button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-2">
                                            <CardBody className="py-5">
                                                <ImProfile size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6 text-uppercase">profile</h5>
                                                <p className=" paragraphEdit description mt-4">
                                                    The user can also log in to the site and create its own page to add preferred currencies and their prices, store and retrieve them.   </p>
                                                <div className='buttonEdit '>
                                                    <Button
                                                        className="mt-4 px-5 shadow"
                                                        color="outline-primary"
                                                        href="#"
                                                    > Login now !</Button>
                                                </div>

                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default CardsHome;
