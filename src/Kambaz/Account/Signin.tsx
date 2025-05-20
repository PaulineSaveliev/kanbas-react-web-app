// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <Form>
          <Form.Control className="wd-signin-input" type="text" placeholder="username" />
          <Form.Control className="wd-signin-input" type="password" placeholder="password" />
          <Link to="/Kambaz/Dashboard" id="wd-signin-btn">
            <Button className="wd-signin-input">
              Sign In
            </Button>
          </Link>
      </Form>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign Up</Link>
    </div>
  );
}