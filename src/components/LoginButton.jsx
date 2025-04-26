import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="px-6 py-3 text-lg rounded-lg border-2 border-green-600 backdrop-blur-md bg-green-600 text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
        onClick={() => loginWithRedirect()}
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
