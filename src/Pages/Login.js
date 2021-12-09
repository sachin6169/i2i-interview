import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (user && password) {
      navigate(`/gallery`);
    } else {
      window.alert("Please enter your username or password.");
    }
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="user id"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
