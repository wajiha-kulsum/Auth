import React from "react";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-pink-600">
      <div className="relative text-center p-10 rounded-lg shadow-xl bg-white bg-opacity-20 backdrop-blur-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to Auth0</h1>
        
        {/* Login/Logout Buttons */}
        <div className="space-y-4 mb-6">
          <LoginButton />
          <LogoutButton />
        </div>
        
        {/* Profile Section */}
        <Profile />
      </div>
    </div>
  );
};

export default App;


new pro