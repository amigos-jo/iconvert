import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} variant="outline-primary" className=" mx-3 btn btn-outline-primary1 "   >Login</button>
  );
}

export default LoginButton;