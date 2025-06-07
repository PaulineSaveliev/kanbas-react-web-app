// Pauline Saveliev
// CS5610 - Summer 1 2025

// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  }
  return (
    <div id="wd-signup-screen">
      <h3>Sign Up</h3>
      <Form>
          <Form.Control onChange={(e) => setUser({...user, username: e.target.value})} className="wd-signin-input" type="text" placeholder="username" />
          <Form.Control onChange={(e) => setUser({...user, password: e.target.value})} className="wd-signin-input" type="password" placeholder="password" />
          <Button className="wd-signin-input" onClick={signup}>
            Sign Up
          </Button>
      </Form>
      <Link  to="/Kambaz/Account/Signin" >Sign In</Link>
    </div>
);}
