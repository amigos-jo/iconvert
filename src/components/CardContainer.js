import React, { Component } from 'react';
import ExchangeForm from './ExchangeForm';
import Chart from './Chart';
import { Card, CardBody, Row } from 'reactstrap';


export class CardContainer extends Component {
    render() {
        return (
            <div>
                <Card className="shadow m-5">
                    <CardBody className="py-5">
                        <ExchangeForm />
                        <Chart />
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardContainer;
