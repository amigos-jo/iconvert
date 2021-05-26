import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { FaShopify } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { SiXero } from "react-icons/si";

export class Home extends Component {
    render() {
        return (
            <div className='divHome'>
                <h2 id='h4Edit'>IConvert</h2>
                <br></br>
                <h5>Below you can see all of the things about the team that did the work and their creativity at doing it</h5>
                <br></br>
                {/* <FaShopify size='3em' color='#fff' mt-5 /> */}
                <span>Success</span>
                {/* <MdContentCopy size='3em' color='#fff' mt-5 /> */}
                <span>Creative</span>
                {/* <SiXero size='3em' color='#fff' /> */}
                <span>Business</span>
                <br></br>
                <br></br>
                <Button
                    className="mt-4 px-5 shadow" id='jakar'
                    color="outline-primary"
                    href="#"
                > Read More</Button>
            </div>
        )
    }
}

export default Home

