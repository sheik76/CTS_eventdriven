// SignUP.js
import React, { useState } from "react";
import LoginImg from "../assets/loginimg.gif";
import "../styles/SignUP.css";
import axios from "axios";

function SignUP() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    userType: '', // default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://172.18.62.22:3002/signup', formData);
     
        console.log('User registered successfully');
        
        // Redirect or perform other actions upon successful registration
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup">
      <div
        className="headerSide"
        style={{ backgroundImage: `url(${LoginImg})` }}
      ></div>
      <div className="footerSide">
        <form id="form"   onSubmit={handleSubmit} method="POST">
          <div className="signupbox">
          <div className="input1">
          <h1>Register</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            placeholder="Enter first name..."
            type="text"
            onChange={handleChange}
            required
          />
          </div>
          <div className="input1">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            placeholder="Enter last name..."
            type="text"
            onChange={handleChange}
            required
          />
          </div>
          <div className="input1">
          <label htmlFor="email">Email ID</label>
          <input
            name="email"
            placeholder="Email ID..."
            type="email"
            onChange={handleChange}
            required
          />
          </div>
          <div className="input1">
          <label htmlFor="phone">Phone No</label>
          <input
            name="phone"
            placeholder="Enter phone no..."
            type="phone"
            onChange={handleChange}
            required
          />
          </div>
          <div className="input1">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Enter password..."
            type="password"
            onChange={handleChange}
            required
          />
          </div>
         <div className="input1">
         <select name="userType" onChange={handleChange}>
            <option value="user">--- Select type of user ---</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
          <button type="submit" >Continue </button>
         </div>
         </div>
        </form>
      </div>
    </div>
  );
}

export default SignUP;
