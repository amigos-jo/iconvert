import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import TableProfile from './TableProfile';
import FormFavoriteProfile from './FormFavoriteProfile';
import FormUdpate from './FormUdpate';
import axios from 'axios';
// import { withAuth0 } from '@auth0/auth0-react';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency1: '',
            currency2: '',
            arrayData: []
        }
    }


    // ========= //
    // for updating dataBase related to user email
    updateCoin = async (e) => {
        e.preventDefault();

        const bodyData = {
            fromCoin: this.state.currency1,
            toCoin: this.state.currency2,
            emailA: this.props.auth0.user.email
        }
        const updateBook = await axios.put(`${process.env.REACT_APP_SERVER_URL}/book/${this.state.index}`, bodyData);

        this.setState({ book12: updateBook.data })
    }

    // ========= //
  

    // ========= //
    // for reading dataBase related to user email
    componentDidMount = async () => {
        try {
            const  tryEmail  = this.props.userPass.user.email;
        const previousInfo = `http://localhost:8090/user?email=${tryEmail}`;
        const req = await axios.get(previousInfo);
        const reqData =  req.data;       
        console.log('from profile req.data', reqData);
        this.setState({
            arrayData: reqData,
        });
      
        } catch (error) {
            console.log(error);
        }
        // console.log('log user email', user.email);
    }


    
    // ========= //
    // for adding coins in profile page
    addCoin = async (e) => {
        e.preventDefault();
        
        const bodyData = {
            fCoin: this.state.currency1,
            sCoin: this.state.currency2,
            email: this.props.userPass.user.email
        }
        const newCoinAdded = await axios.post(`http://localhost:8090/user`, bodyData);

        this.setState({ arrayData: newCoinAdded.data })
    }

    updateCurrency1 = (e) => this.setState({ currency1: e.target.value });
    updateCurrency2 = (e) => this.setState({ currency2: e.target.value });
    // ========= //

    render() {
        console.log('from profile state', this.state.arrayData);
        // console.log('propfile', this.props.userPass.user.email);
        return (
            <div>

                <PersonalInfo />
                <br></br>
                <FormFavoriteProfile
                    addCoin={this.addCoin}
                    updateCurrency1={this.updateCurrency1}
                    updateCurrency2={this.updateCurrency2}
                />
                <br></br>
                {this.state.arrayData.length && 
                     <TableProfile
                     array1={this.state.arrayData}
                 />
                }
           
                <br></br>
                <FormUdpate />
            </div>
        )
    }
}

export default Profile
