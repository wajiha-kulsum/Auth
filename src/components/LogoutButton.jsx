import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="px-6 py-3 text-lg rounded-lg border-2 border-blue-600 backdrop-blur-md bg-blue-600 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
