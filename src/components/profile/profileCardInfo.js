import React, { Component } from 'react';



export class profileCardInfo extends Component {
    render() {
        return (
            <div>
                <div id="cards_landscape_wrap-2 ">
                    <div class="container">


                        <div class="row justify-content-center ">


                            <div class="col-lg-4 userCard cardColor1">

                                <div class="card-flyer">
                                    <div class="text-box">
                                        <br></br>
                                        <h3>Your Information </h3>
                                        <br></br>
                                        <div   >
                                            <img clasName='rounded-circle' src={this.props.userPic} alt="" style={{
                                                width: 150, height: 150, borderRadius: 400 / 2
                                            }}

                                            />

                                        </div>

                                        <div class="text-container userInfo ">
                                            <br></br>

                                            <h6> your name:</h6>      <p > {this.props.name}  </p>
                                            <br></br>
                                            <h6>  your email:</h6>    <p>{this.props.userEmail}</p>
                                            <br></br>
                                            <h6>  Date:  </h6>        <p>{this.props.date}</p>
                                            <br></br>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default profileCardInfo;
