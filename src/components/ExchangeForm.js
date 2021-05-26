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

    
    render() {
        // console.log(this.props.currencyHistory);
        return (
            <div>

                <Form className=' p-4 w-75 convForm'>
                    <Row>
                        <Col>
                            <Form.Label className='lableForm'>Amount</Form.Label>
                            <Form.Control type="number" min='1' placeholder="Amount" className='inputForm' onChange={(e)=>this.props.changeAmount(e)}/>
                        </Col>
                        <Col>
                            <Form.Group className='test2' >
                                <Form.Label className='lableForm'>From</Form.Label>
                                <Form.Control as="select" className='inputForm' onChange={(e) => this.props.fromChange(e)}>



                                    {array1.map(element => {
                                        if (this.props.first.value === element.value) {
                                           return <option selected value={element.value}>{element.type}</option>
                                        }
                                        else {
                                            return (
                                                <option value={element.value}>{element.type}</option>
                                            )
                                        }
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <div className='editButtonForm'>
                                <Button className='test rounded-circle' ><AiOutlineSwap size='1.5em' onClick={this.props.changeButton} className='edit' /></Button>
                            </div>

                        </Col>

                        <Col>
                            <Form.Group className='test2' >
                                <Form.Label className='lableForm'>To</Form.Label>
                                <Form.Control as="select" className='inputForm' onChange={(e) => this.props.toChange(e)}>

                                    {array1.map(element => {
                                       if (this.props.second.value === element.value) {
                                        return  <option selected value={element.value}>{element.type}</option>
                                    }
                                    else {
                                        return (
                                            <option value={element.value}>{element.type}</option>
                                        )
                                    }
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <div className='pull-right'>
                        <Button variant="outline-primary " className='btnForm rounded' onClick={this.props.getData} >Convert</Button>
                    </div>
                </Form>

            </div >
        )
    }
}

export default ExchangeForm
