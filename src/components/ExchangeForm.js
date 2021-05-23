import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSwap } from 'react-icons/ai'

let array1 = [
    { value: 'EUR', type: 'EUR - Euro' },
    { value: 'USD', type: 'USD - Dollar' },
    { value: 'JOD', type: 'JOD - Dinar' }
];

export class ExchangeForm extends Component {
    constructor(props) {

        super(props);
        this.state = {
            btnActive: false,
            first: { value: 'EUR', type: 'EUR - Euro' },
            second: { value: 'EUR', type: 'EUR - Euro' }
        }
    }

    changeButton = () => {
        let firstVar = this.state.first;

        this.setState({
            btnActive: !this.state.btnActive,
            first: this.state.second,
            second: firstVar
        })

        console.log('First', this.state.first);

        console.log('Second', this.state.second);

    }
    fromChange = (e) => {
        let myValue = e.target.value;
        let myType = '';
        for (let i = 0; i < e.target.length; i++) {

            if (e.target[i].value === myValue) {
                myType = e.target[i].textContent;

            }

        }
        this.setState({
            first: { value: myValue, type: myType }
        })
        console.log('First', this.state.first);


    }
    toChange = (e) => {

        let myValue = e.target.value;
        let myType = '';
        for (let i = 0; i < e.target.length; i++) {

            if (e.target[i].value === myValue) {
                myType = e.target[i].textContent;

            }

        }
        this.setState({
            second: { value: myValue, type: myType }
        })
        console.log('second', this.state.second);

    }


    render() {
        return (
            <div>

                <Form className=' p-4 w-75 convForm'>
                    <Row>
                        <Col>
                            <Form.Label className='lableForm'>Amount</Form.Label>
                            <Form.Control type="number" min='1' placeholder="Amount" className='inputForm' />
                        </Col>
                        <Col>
                            <Form.Group className='test2' >
                                <Form.Label className='lableForm'>From</Form.Label>
                                <Form.Control as="select" className='inputForm' onChange={(e) => this.fromChange(e)}>



                                    < option onFocus value={this.state.second.value}>{this.state.second.type}</option>
                                    {array1.map(element => {

                                        return (
                                            <option value={element.value}>{element.type}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button className='test rounded-circle'><AiOutlineSwap size='1.5em' onClick={this.changeButton} /></Button>
                        </Col>

                        <Col>
                            <Form.Group className='test2' >
                                <Form.Label className='lableForm'>To</Form.Label>
                                <Form.Control as="select" className='inputForm' onChange={(e) => this.toChange(e)}>
                                    <option value={this.state.first.value}>{this.state.first.type}</option>

                                    {array1.map(element => {
                                        return (
                                            <option value={element.value}>{element.type}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>


                    </Row>
                    <div className='pull-right'>
                        <Button variant="primary" className='btnForm rounded' >Submit</Button>
                    </div>
                </Form>

            </div >
        )
    }
}

export default ExchangeForm
