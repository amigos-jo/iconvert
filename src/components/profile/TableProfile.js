import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class TableProfile extends Component {
    state = {
        coinName: [],
        coinArray: [],
    }

    componentDidMount = async () => {
        try {
            const mappingArray = this.props.array1
            console.log('new variable', mappingArray);
            this.setState({
                coinName : mappingArray
            })
            const x = mappingArray.map(el => {
                console.log('el', el);
                const coins = el.split('/')
                return coins
            })
            const xTest = [];
            console.log('THIS IS X', x);
            for (let i = 0; i < x.length; i++) {
                const xx = await this.newTest(x[i]).then(dataA => xTest.push(dataA.data));
                console.log('new try', xTest);
                console.log('inside for xx', xx);
                ;
            }
            this.setState({
                coinArray : xTest
            })
        } catch (error) {
            console.log(error);
        }
    }
    newTest = async (coins) => {
        console.log('coins', coins);
        const url = `http://localhost:8090/excoin?fromCoin=${coins[0]}&toCoin=${coins[1]}&amount=1`;
        const coinRate = await axios.get(url);
        return coinRate
    }
    
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

                    <tbody >
                        {this.state.coinArray.length &&
                            this.state.coinArray.map((element,ind) => {
                                return <>
                                    < tr>
                                        <td ><Button variant="outline-danger" className="mt-4 px-5 shadow">X</Button></td>
                                        <td ><Button variant="outline-primary" className="mt-4 px-5 shadow">Update</Button></td>
                                        <td className="text-primary">{this.state.coinName[ind]}</td>
                                        <td className="text-secondary">{element}</td>
                                        <td className="text-danger">▼</td>
                                    </tr>
                                </>
                            })
                        }

                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableProfile
