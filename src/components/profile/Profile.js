import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import TableProfile from './TableProfile';
import FormFavoriteProfile from './FormFavoriteProfile';
import FormUdpate from './FormUdpate';

export class Profile extends Component {
    render() {
        return (
            <div>

                <PersonalInfo />
                <br></br>
                <FormFavoriteProfile />
                <br></br>
                <TableProfile />
                <br></br>
                <FormUdpate />
            </div>
        )
    }
}

export default Profile
