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
                        <ExchangeForm
                            first={this.props.first}
                            second={this.props.second}
                            getData={this.props.getData}
                            changeButton={this.props.changeButton}
                            fromChange={this.props.fromChange}
                            toChange={this.props.toChange}
                            currAmount={this.props.currAmount}
                            changeAmount={this.props.changeAmount} />
                        {this.props.show &&
                            <Chart
                                currencyHistory={this.props.currencyHistory} />
                        }
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardContainer;
