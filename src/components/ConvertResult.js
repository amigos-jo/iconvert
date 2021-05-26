import React, { Component } from 'react'

export class ConvertResult extends Component {
    render() {
       
        return (
            

            <div className='convResult'>
                <h5>{this.props.currAmount} {this.props.first.type} =</h5>
                
                <h1>{this.props.currency.conversion_result}<span className='notVisi'> {this.props.second.type}</span></h1>
                <br>
                </br>
                <br></br>
            </div>
        )
    }
}

export default ConvertResult
