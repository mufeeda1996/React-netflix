import React from 'react';
import {Link} from 'react-router-dom'
// import Logo from '../../olx-logo.png';
import './Signup.css';
export default function Signup() {
  return (
    <div>
      <div className='navbar'></div>
      <div className="signupParentDiv">
        {/* <img width="200px" height="200px" src={Logo}></img> */}
        <div className='title'>
        <a>Sign up now</a></div>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          
          <Link to="/login">
          <button>Signup</button></Link>
         
        </form>
        <div className='member'>
        <a>Netflix member ?</a>
        <Link to='/login'>Login</Link>
        
        </div>
      </div>
 </div>
)}