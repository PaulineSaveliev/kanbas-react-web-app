// Pauline Saveliev
// CS5610 - Summer 1 2025

// import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign Up</h3>
      <Form>
          <Form.Control className="wd-signin-input" type="text" placeholder="username" />
          <Form.Control className="wd-signin-input" type="password" placeholder="password" />
          <Link to="/Kambaz/Account/Profile" id="wd-signup-btn">
            <Button className="wd-signin-input">
              Sign Up
            </Button>
          </Link>
      </Form>
      <Link  to="/Kambaz/Account/Signin" >Sign In</Link>
    </div>
);}
