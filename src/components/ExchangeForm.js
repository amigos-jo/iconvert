import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSwap } from 'react-icons/ai';
import CurrencyJSONFile from '../assets/JSONFile/currencyFile';



{/* <img src={`data:image/jpg;base64,${element.flag}`} alt="Red dot" /> */ }


export class ExchangeForm extends Component {


    render() {
        // console.log(this.props.currencyHistory);
        return (
            <div>

                <Form className=' p-4 w-75 convForm'>
                    <Row>
                        <Col>



                            <Form.Label className='lableForm'>Amount</Form.Label>
                            <Form.Control type="number" min='1' placeholder="Amount" className='inputForm' onChange={(e) => this.props.changeAmount(e)} />
                        </Col>
                        <Col>
                            <Form.Group className='test2' >
                                <Form.Label className='lableForm'>From</Form.Label>
                                <Form.Control as="select" className='inputForm' onChange={(e) => this.props.fromChange(e)}>



                                    {CurrencyJSONFile.map(element => {
                                        if (this.props.first.value === element.currency.code) {
                                            return <option selected value={element.currency.code}>  {element.currency.code} - {element.name}</option>
                                        }
                                        else {
                                            return (
                                                <>

                                                    <option  value={element.currency.code}> {element.currency.code} - {element.name}</option>
                                                </>
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

                                    {CurrencyJSONFile.map(element => {
                                        if (this.props.second.value === element.value) {
                                            return <option selected value={element.currency.code}> {element.currency.code} - {element.name}</option>
                                        }
                                        else {
                                            return (
                                                <option value={element.currency.code}> {element.currency.code} - {element.name}</option>
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
