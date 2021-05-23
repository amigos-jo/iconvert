import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import A from '../assets/1.jpg';
import B from '../assets/2.jpg';
import C from '../assets/3.jpg';
import D from '../assets/4.jpg';
import E from '../assets/5.jpg';
import F from '../assets/6.jpg';


export class Banner extends Component {
    render() {
        return (
            <div>


                <Carousel fade>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src={A}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src={B}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img
                            className="d-block w-100"
                            src={C}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={D}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={E}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={F}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>


                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Banner
