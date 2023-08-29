import React from "react";
import { Button } from "react-bootstrap";

import "./Profile.scss";
import Logout from "./Logout";

export default function Profile({ user, logout, show }) {

  return (
    <div className="profile">
      {show && <Logout show={show} logout={logout}/>}
      <h1>Profile</h1>
      <div>
        <img src={user.picture} alt={user.name} />
        <div className="info">
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p><Button size="sm" variant="outline-secondary" href="/pets/view"> View My Study Sets </Button></p>
          <p><Button size="sm" variant="outline-secondary" href="/pets/new">Create New Study Set </Button></p>
          <p><Button size="lg" variant="danger" onClick={() => logout(true)}>Logout</Button></p>
        </div>
      </div>
    </div>
  
  );
};

