import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const data = await response.json();
    if (!data.success) {
      alert("Enter Valid Credentials");
    } else {
      localStorage.setItem("authToken", data.authToken);
      localStorage.setItem("userEmail", credentials.email);
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
