import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Link to the CSS file

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate("/home");
    }
  };

  return (

    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <h1 className="portal-title">PG Portal</h1>
<h2 className="login-heading">Login</h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
