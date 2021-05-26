import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";
import { GiChart } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { HiOutlineCurrencyPound } from "react-icons/hi";



export class CardsHome extends Component {
    render() {
        return (
            <>
                <div className="class my-5">
                    <h2 >The world's most popular currency tools</h2>
                </div>

                <section className="section section-lg pt-lg-0 mt--200">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <Row className="row-grid">
                                    <Col lg="4">
                                        <Card className="shadow">
                                            <CardBody className="py-5">
                                                <GiChart size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6 text-uppercase"> Convert</h5>

                                                <p className="paragraphEdit mt-4">
                                                   in this website we provide convert tool</p>
                                                    <div className='buttonEdit'>
                                                    <Button
                                                        className="mt-4 px-5 shadow"
                                                        color="outline-primary"
                                                        href="#"
                                                    > try convert!</Button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow ">
                                            <CardBody className="py-5">
                                            <RiExchangeDollarFill size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6"> Title</h5>
                                                <p className=" paragraphEdit description mt-4">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
                                                    <div className='buttonEdit'>
                                                    <Button
                                                        className="mt-4 px-5 shadow"
                                                        color="outline-primary"
                                                        href="#"
                                                    > click</Button>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-2">
                                            <CardBody className="py-5">
                                            <HiOutlineCurrencyPound size='4em' color='#2B2ACE ' />
                                                <h5 className="cardh6 text-uppercase"> Title</h5>
                                                <p  className=" paragraphEdit description mt-4">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
                                                <div className='buttonEdit '>
                                                    <Button
                                                        className="mt-4 px-5 shadow"
                                                        color="outline-primary"
                                                        href="#"
                                                    > click</Button>
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
