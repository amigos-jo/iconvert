import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export class TableHome extends Component {
    render() {
        return (
            <>
                <div className="class class1 my-3  ">
                    <h2 >Live Currency Rates</h2>
                </div>
                <Table className=' css w-75' responsive="sm">
                    <thead  >
                        <tr className='border-secondary'>
                            <th>Currency</th>
                            <th className='text-secondary1'>Rate </th>
                            <th> &nbsp; &nbsp;   Change</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr  >
                            <td className="text-primary">EUR / USD</td>
                            <td className="text-secondary text-secondary1">1.21796</td>
                            <td className="text-danger symbol-position">  &nbsp; &nbsp; &nbsp;
▼</td>
                        </tr>
                        <tr>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary text-secondary1">1.16187</td>
                            <td className="text-success"> &nbsp; &nbsp; &nbsp; ▲</td>
                        </tr>
                        <tr>
                            <td className="text-primary">GBP / EUR</td>
                            <td className="text-secondary text-secondary1">1.16187</td>
                            <td className="text-danger">&nbsp; &nbsp; &nbsp; ▼</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableHome;
