import React from "react";

function Login() {
  return (
    <div>
      <AuthForm authAction={authAction} mode="login" />
    </div>
  );
}

export default Login;
