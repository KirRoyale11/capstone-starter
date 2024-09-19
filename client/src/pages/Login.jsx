import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import AuthForm from "../components/AuthForm/AuthForm";

function Login({ auth, authAction, users }) {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm authAction={authAction} mode="login" />
      <p>
        Need an account? <Link to="/register">Register here.</Link>
      </p>
    </div>
  );
}

export default Login;
