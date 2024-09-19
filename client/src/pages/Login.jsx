import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

function Login({ auth, authAction, users }) {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm authAction={authAction} mode="login" />
    </div>
  );
}

export default Login;
