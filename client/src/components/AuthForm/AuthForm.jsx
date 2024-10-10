import { useState, useEffect } from "react";

const AuthForm = ({ authAction, mode = "login" }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (ev) => {
    ev.preventDefault();
    try {
      await authAction({ username, password }, mode);
    } catch (ex) {
      setError(ex.error);
    }
  };
  // const RegForm = ()
  return (
    <form onSubmit={submit}>
      {!!error && <div className="error">{error}</div>}
      {mode === "register" && (
        <>
          {/* <input
            value={firstname}
            placeholder="First Name"
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <input
            value={lastname}
            placeholder="Last Name"
            onChange={(ev) => setLastName(ev.target.value)}
          /> */}
          {/* <input
            value={username}
            placeholder="Username"
            onChange={(ev) => setUsername(ev.target.value)}
          /> */}
        </>
      )}
      <input
        value={username}
        placeholder="Username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        value={password}
        placeholder="Password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>{mode}</button>
    </form>
  );
};

export default AuthForm;
