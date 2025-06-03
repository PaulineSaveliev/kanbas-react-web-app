// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <Form>
          <Form.Control defaultValue={credentials.username} 
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            className="wd-signin-input" type="text" placeholder="username" />
          <Form.Control defaultValue={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className="wd-signin-input" type="password" placeholder="password" />
          <Button className="wd-signin-input" onClick={signin}>
            Sign In
          </Button>
      </Form>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign Up</Link>
    </div>
  );
}