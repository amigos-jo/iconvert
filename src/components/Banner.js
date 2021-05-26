import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import A from '../assets/BannerImg/1.jpg';
import D from '../assets/BannerImg/4.jpg';
import F from '../assets/BannerImg/6.jpg';
import G from '../assets/BannerImg/7.jpg';
import H from '../assets/BannerImg/8.jpg';
import I from '../assets/BannerImg/9.jpg';
import L from '../assets/BannerImg/12.jpg';
import M from '../assets/BannerImg/13.jpg';
import N from '../assets/BannerImg/14.jpg';
import P from '../assets/BannerImg/16.jpg';


export class Banner extends Component {
    render() {
        return (
            <div>


                <Carousel fade>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={A}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={D}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={F}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>

                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={G}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={H}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={I}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>

                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={L}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={M}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>
                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={N}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>

                    <Carousel.Item interval={4500}>
                        <img
                            className="d-block w-100"
                            src={P}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>


                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Banner
