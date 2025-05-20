// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-7 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="wd-account-signin"
        className="list-group-item active border border-0"> Sign In </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-account-signup"
        className="list-group-item text-danger border border-0"> Sign Up </Link>
      <Link to="/Kambaz/Account/Profile" id="wd-account-profile"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}