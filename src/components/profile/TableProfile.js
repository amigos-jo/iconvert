import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export class TableProfile extends Component {
    render() {
        return (
            <>
                <div className="class my-3">
                    <h2 >Live Currency Rates</h2>
                </div>
                <Table className=' css w-75 ' responsive="sm" hover >
                    <thead  >
                        <tr className='border-secondary'>
                            <th></th>
                            <th></th>
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td ><Button variant="outline-danger" className="shadow rounded-circle deleteProp">X</Button></td>
                            <td ><Button variant="outline-primary" className=" px-5 shadow">Update</Button></td>
                            <td className="text-primary   ">EUR / USD</td>
                            <td className="text-secondary  ">1.21796</td>
                            <td className="text-danger "> &nbsp; &nbsp; &nbsp;▼</td>
                        </tr>
                        <tr>
                            <td ><Button variant="outline-danger" className="   shadow rounded-circle deleteProp" >X</Button></td>
                            <td ><Button variant="outline-primary" className="  px-5 shadow">Update</Button></td>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary">1.16187</td>
                            <td className="text-success">&nbsp; &nbsp; &nbsp;▲</td>
                        </tr>
                        <tr>
                            <td ><Button variant="outline-danger" className="   shadow rounded-circle deleteProp">X</Button></td>
                            <td ><Button variant="outline-primary" className=" px-5 shadow">Update</Button></td>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary">1.16187</td>
                            <td className="text-danger">&nbsp; &nbsp; &nbsp;▼</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableProfile
