import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} className=" px-4 btn btn-outline-primary btn-outline-warning1  ">Login</button>
  );
}

export default LoginButton;