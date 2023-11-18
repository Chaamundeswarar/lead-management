import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
//import {Routes,Route} from "react-router-dom";
//import AdminPage from "./AdminPage";
//import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginmessage, setLoginInMessage] = useState("");

  const submitSignIn = useCallback(async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');

    if (email === 'admin' && password === 'admin') {
      navigate('/AdminPage');
    } 
    else if (email === "agent" && password === "agent") {
      navigate('/Agent');
    }
    else{
      setLoginInMessage('Invalid credentials');
    }
  }, [navigate]);

  const showPassword = () => {
    const pwd = document.getElementById('inpassword');
    if (pwd.type === "text") {
      pwd.type = "password";
    } else {
      pwd.type = "text";
    }
  }
  return (
    <div>
      <div className={`container`}>
        <div className="form-container sign-in-container">
          <form onSubmit={submitSignIn}>
            <br />
            <h2>Sign In</h2>
            {loginmessage ? <p className="msg error">{loginmessage}</p>:<p className="msg">Enter Your Login Credentials</p>}
            <br/>
            <input type="email" name="email" placeholder="Email"/>
            <br/>
            <input type="password" name="password" placeholder="Password"/>
            <br/>
            <button onClick={()=>showPassword()}>Show Password</button><br/><br/>
          </form>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
