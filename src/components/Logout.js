import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (


    <Button variant="outline-primary" className=" mx-3 btn btn-outline-primary1 " onClick={() => {
      logout({ returnTo: window.location.origin });
    }} >Logout</Button>
  );
}

export default LogoutButton;





