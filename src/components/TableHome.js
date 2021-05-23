import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export class TableHome extends Component {
    render() {
        return (
            <>
               <div className="class my-3">
                    <h2 >Live Currency Rates</h2>
                </div>
                <Table  className=' css w-75' responsive="sm">
                    <thead  >
                        <tr className='border-secondary'>
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="text-primary">EUR / USD</td>
                            <td className="text-secondary">1.21796</td>
                            <td className="text-danger">▼</td>
                        </tr>
                        <tr>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary">1.16187</td>
                            <td className="text-success">▲</td>
                        </tr>
                        <tr>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary">1.16187</td>
                            <td className="text-danger">▼</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableHome;
