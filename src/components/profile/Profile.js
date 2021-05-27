import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import TableProfile from './TableProfile';
import FormFavoriteProfile from './FormFavoriteProfile';
import axios from 'axios';
// import { withAuth0 } from '@auth0/auth0-react';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency1: '',
            currency2: '',
            arrayData: [],
            reload: false
        }
    }


    // ========= //

  

    // ========= //
    // for reading dataBase related to user email
    componentDidMount = async () => {
        let host = process.env.REACT_APP_HOST;

        try {
            const  tryEmail  = this.props.userPass.user.email;
        const previousInfo = `${host}/user?email=${tryEmail}`;
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
                    // addCoin={this.addCoin}
                    // updateCurrency1={this.updateCurrency1}
                    // updateCurrency2={this.updateCurrency2}
                    userPass={this.props.userPass}
                />
                <br></br>
                {this.state.arrayData.length &&
                 
                     <TableProfile
                     array1={this.state.arrayData}
                     userPass={this.props.userPass}
                     
                 />
                }
           
                <br></br>
                {/* <FormUdpate /> */}
            </div>
        )
    }
}

export default Profile
