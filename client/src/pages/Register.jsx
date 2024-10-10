import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

function Register({ auth, authAction }) {
  return (
    <div className="register-page">
      <h2>Register Here</h2>

      <>
        <AuthForm authAction={authAction} mode="register" />
      </>
    </div>
  );
}

export default Register;
