
import React, { useState } from "react";
import "./Login.css";

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
    
    
  }

  return (
  
  
  <div className="login">
    
      <div className="login-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="login-form">
          <h1 className="login-title">Login</h1>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
