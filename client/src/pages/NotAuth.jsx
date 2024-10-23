import React from "react";
import { Link } from "react-router-dom";

function NotAuth() {
  return (
    <div>
      <h2>User not authorized</h2>
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default NotAuth;
