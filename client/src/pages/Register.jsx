import React from "react";

function Register() {
  return (
    <div>
      <h2>Register Here</h2>
      <AuthForm authAction={authAction} mode="register" />
    </div>
  );
}

export default Register;
