import React from "react";
import LoginImg from "../assets/loginimg.gif";
import "../styles/SignIn.css";

function SignIn () {
    return (
        <div className="home">
            <div className="headerSide" style={{ backgroundImage:`url(${LoginImg})` }}
            ></div>
         <div className="footerSide">
            <h1> Login</h1>
         <form id="form"  method="POST">
            <div className="signinbox">
            <div className="input2">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            
            </div>
            <div className="input2">
            <label htmlFor="password"> Password</label>
            <input name="password" placeholder="Enter password..." type="password" required />
           <button className="lgbtn" type="submit">Login</button>
            </div>
           
            
            </div>
            
         </form>
         </div>
        </div>
    );
}

export default SignIn;