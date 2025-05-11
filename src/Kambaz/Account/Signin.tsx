// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input type="text" placeholder="username" className="wd-username" value="Student1234"/> <br />
      <input placeholder="password" type="password" className="wd-password" value="securepassword..."/> <br />
      <Link  to="/Kambaz/Dashboard" id="wd-signin-btn"><button>Sign in</button></Link> <br />
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>
    </div>
  );
}