import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  // Check if the user is authenticated
  if (!isAuthenticated) {
    return <div>Please log in to see your profile.</div>;
  }

  return (
    <article className="column">
      {/* Check if the user has a profile picture */}
      <h2>{user?.name}</h2>
      <ul>
        {/* Conditionally display relevant user details */}
        <li><strong>Nickname:</strong> {user?.nickname}</li>
        <li><strong>Full Name:</strong> {user?.name}</li>
        <li><strong>Email:</strong> {user?.email}</li>
        <li><strong>Given Name:</strong> {user?.given_name}</li>
        <li><strong>Family Name:</strong> {user?.family_name}</li>
        <li><strong>Sub:</strong> {user?.sub}</li>
      </ul>
    </article>
  );
};

export default Profile;
