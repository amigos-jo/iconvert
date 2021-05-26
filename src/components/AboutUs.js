import React, { Component } from 'react';
import AmrNzzal from '../assets/AmrNzzal.jpg';
import Dania from '../assets/DaniaAbughoush.jpg';
import DinaKhaleel from '../assets/DinaKhaleel.PNG';
import EnasBatayneh from '../assets/EnasBatayneh.jpg';
import Ibrahim from '../assets/Ibrahim.jpg';
import MohammadAqel from '../assets/MohammadAqel.jpg';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
// import { AiOutlineFacebook } from "react-icons/ai";
import Home from './Home';
import { FaFacebookF } from 'react-icons/fa';

export class Test extends Component {
    render() {
        return (
            <div className='icons-position1'>
                <div className="class my-5">
                    <h2 >iConvert website concept</h2>
                </div>
                <div className='paragraphEditAboutUs'>
                    <p className=" mt-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
                    <hr />
                </div>
                <div className="class mt-5 mb-1">
                    <h2 >Our Team</h2>
                </div>

                <div id="cards_landscape_wrap-2">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={AmrNzzal} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Amr Nzzal</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div>
                                                <a href="https://github.com/amr88nzzal"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><FaFacebookF size='1.46em' color='#3d84b8' /></a>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={Dania} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Dania Abughoush</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div>
                                                <a href="https://github.com/DaniaAbughoush"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="https://www.linkedin.com/in/dania-abughoush/


"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="https://www.facebook.com/dania.abugoush.14
"><FaFacebookF size='1.46em' color='#3d84b8' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={DinaKhaleel} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Dina Khaleel</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div className='icons-position1'>
                                                <a href="https://github.com/DinaSami"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><FaFacebookF size='1.46em' color='#3d84b8' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={EnasBatayneh} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Enas Batayneh</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div>
                                                <a href="https://github.com/En-ZUH"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="https://www.linkedin.com/in/enas-bataineh/"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="https://github.com/En-ZUH"><FaFacebookF size='1.46em' color='#3d84b8' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={Ibrahim} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Ibrahim Abu-awad</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div>
                                                <a href="https://github.com/IbrahimAbuawad"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><FaFacebookF size='1.46em' color='#3d84b8' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={MohammadAqel} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Mohammad Aqel</h6>
                                            <h1>Software developer</h1>
                                            <p >website designer | UI designer </p>
                                            <br></br>
                                            <div>
                                                <a href="https://github.com/MohammadAqel"><AiFillGithub size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><AiFillLinkedin size='1.7em' color='#3d84b8' /></a>
                                                <a href="/"><FaFacebookF size='1.46em' color='#3d84b8' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Home />
            </div >



        )
    }
}

export default Test
