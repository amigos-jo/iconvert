import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

export default class Footer extends Component {
    render() {
        return (

            <div>
                <footer class="text-center text-lg-start  dim-footer footer-height'  ">

                    <section class="">
                        <div class="container text-center text-md-start mt-5">
                            <div class="row mt-3 ">
                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 div-icons footer-height">

                                    <h6 class="mb-4  ">
                                        <i class="fas fa-gem me-3 "></i>Get connected with us on social networks:
          </h6>
                                    <p>
                                        <a href="/" className="me-4 text-reset footer-icon-position ">
                                            <FaFacebookF size='1.5rem' />
                                        </a >

                                        <a href="/" className="me-4 text-reset footer-icon-position ">
                                            <GrInstagram size='1.5rem' />
                                        </a>

                                        <a href="/" className="me-4 text-reset  footer-icon-position  ">
                                            <AiFillGithub size='1.7rem' />
                                        </a>

                                        <a href="/" className="me-4 text-reset footer-icon-position ">
                                            <FiTwitter size='1.5rem' />
                                        </a>

                                    </p >
                                </div >

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  ">

                                    <h6 class=" mb-4">
                                        Contact
          </h6>
                                    <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>
            Convert@gmail.com
          </p>
                                    <p><i class="fas fa-phone me-3"></i> + 00962 795554444</p>

                                </div>

                            </div >

                        </div >
                    </section >



                    <div class="text-center p-4 footer-height"  >
                        <hr width={'50%'} className='hrdim' />
                        © 2021 iConverTeam
                     </div>

                </footer >

            </div >

        );
    }
}
