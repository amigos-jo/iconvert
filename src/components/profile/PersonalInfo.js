import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image'

const PersonalInfo = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <div className='shadow mt-5 mb-5 editDivaInfo w-50'>
            <h3>User Information</h3>
                    <Image  className='d-inline rounded-circle shadow editImage ' src={user.picture}  />
                    <div className='d-block'>
                        <p>Hello {user.nickname}</p>
                        <p>Email: {user.email}</p>
                        <p>date: {user.updated_at}</p>
                    </div>
            </div>
        </div>
    );
};

export default PersonalInfo;

