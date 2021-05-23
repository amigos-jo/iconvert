import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { FaShopify } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { SiXero } from "react-icons/si";

export class Home extends Component {
    render() {
        return (
            <div className='divHome'>
                <h4 id='h4Edit'>Xe Currency Data API</h4>
                <br></br>
                <h5>Powering commercial grade rates at 300+ companies worldwide</h5>
                <br></br>
                <FaShopify size='3em' color='#fff' mt-5 />
                <span>Shopify</span>
                <MdContentCopy size='3em' color='#fff' mt-5 />
                <span>Clear Books</span>
                <SiXero size='3em' color='#fff' />
                <span>Vistaprint</span>
                <br></br>
                <br></br>
                <Button
                    className="mt-4 px-5 shadow" id='jakar'
                    color="outline-primary"
                    href="#"
                > click</Button>
            </div>
        )
    }
}

export default Home

