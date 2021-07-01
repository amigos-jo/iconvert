import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineSwap } from 'react-icons/ai';
import axios from 'axios';
import CurrencyJSONFile from '../../assets/JSONFile/currencyFile';



export class FormFavoriteProfile extends Component {
    constructor(props) {

        super(props);
        this.state = {
            btnActive: false,
            first: { value: 'EUR', type: 'EUR - Euro' },
            second: { value: 'EUR', type: 'EUR - Euro' },
            arrayAdii:[]
        }
    }

    changeButton = () => {
        let firstVar = this.state.first;

        this.setState({
            btnActive: !this.state.btnActive,
            first: this.state.second,
            second: firstVar
        })


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

    }
    addCoin = async (e) => {
        e.preventDefault();
        
        const bodyData = {
            fCoin: this.state.first.value,
            sCoin: this.state.second.value,
            email: this.props.userPass.user.email
        }
       let host = process.env.REACT_APP_HOST;
        const newCoinAdded = await axios.get(`${host}/addcoin?email=${bodyData.email}&fCoin=${bodyData.fCoin}&sCoin=${bodyData.sCoin}`);

        this.setState({ arrayAdii: newCoinAdded.data })
        window.location.reload();
    }
    render() {
        return (
            <div>
                <Form className='p-4 w-75 convForm pb-5 '>
                    <div className="class  mt-2 ">
                        <h2 >Add to my favorite</h2>
                    </div>
                    <Row className=" px-4   ">
                        <Col>
                            <Form.Group className='test2'  onSubmit={(e) => this.props.addBook(e)}>
                                <Form.Label className='lableForm  '>From</Form.Label>
                                <Form.Control as="select" className='inputForm ' onChange={(e) => this.fromChange(e)}>

                                {CurrencyJSONFile.map(element => {
                                        if (this.state.first.value === element.currency.code) {
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
                                <Button className='test rounded-circle mx-5' ><AiOutlineSwap size='1.5em' onClick={this.changeButton} className='edit' /></Button>
                            </div>

                        </Col>

                        <Col>
                            <Form.Group className='test2 ' >
                                <Form.Label className='lableForm inputTO2'>To</Form.Label>
                                <Form.Control as="select" className='inputForm inputTO2' onChange={(e) => this.toChange(e)} >

                                {CurrencyJSONFile.map(element => {
                                        if (this.state.second.value === element.currency.code) {
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
                        <Col className='newEdit  '>
                            <Button variant="outline-primary " className='newButton newButton1' onClick={(e)=> this.addCoin(e)}>Add </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default FormFavoriteProfile