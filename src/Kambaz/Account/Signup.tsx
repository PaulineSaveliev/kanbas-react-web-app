// Pauline Saveliev
// CS5610 - Summer 1 2025

// import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input type="text" placeholder="username" className="wd-username" defaultValue="username993"/><br/>
      <input placeholder="password" type="password" className="wd-password" defaultValue="defaultPassword"/><br/>
      <input placeholder="verify password" defaultValue="defaultPassword"
             type="password" className="wd-password-verify" /><br/>
      <Link  to="/Kambaz/Account/Profile" > <button>Sign up</button></Link><br />
      <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}
