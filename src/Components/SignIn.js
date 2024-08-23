import "./SignIn.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignIn = ({setIsLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");
 
  async function handleSubmit(e) {
    e.preventDefault();
    console.table({ email, password });
    try {
      const response = await fetch("https://insta-backend-hr3a.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const data = await response.json();
      // if(data.token{

      // })
      console.log("Logged in successfully!");
      localStorage.setItem ("token",data.token);
      setIsLogin(true)
      navigate("/homepage");
    } catch (error) {
      console.error("Log in fail", error);
    }
  }

  return (
    <>
      <div className="main">

        <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"></img>
    
    
        <form>
          <input
            className="input-box"
            type="email"
            placeholder="Phone number, username, or email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-box"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button id="signup-btn" type="submit" onClick={handleSubmit}>
            Log in
          </button>
        </form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <hr id="line"></hr>OR <hr id="line"></hr>
        </div>
      </div>
      <div id="login">
        <h4 id="have-account">
          Log in with Facebook <Link to={"/signup"}>Log in</Link>
        </h4>
      </div>
    </>
  );
};

export default SignIn;

