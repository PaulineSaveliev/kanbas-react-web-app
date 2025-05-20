// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form>
          <Form.Control className="wd-signin-input" type="text" placeholder="username" defaultValue="user12345" />
          <Form.Control className="wd-signin-input" type="password" placeholder="password" defaultValue="password123"/>
          <Form.Control className="wd-signin-input" type="text" placeholder="first name" defaultValue="Richard" />
          <Form.Control className="wd-signin-input" type="text" placeholder="last name" defaultValue="Rider"/>
          <Form.Control  className="wd-signin-input" type="date" placeholder="mm/dd/yyyy" defaultValue="2025-05-06" />
          <Form.Control className="wd-signin-input" type="email" placeholder="email" defaultValue="rider.r@northeastern.edu"/>
          <FormSelect id="wd-user-status" className="wd-signin-input">
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
          <Link to="/Kambaz/Account/Signin" id="wd-signout-btn">
            <Button className="wd-signin-input" variant="danger">
              Sign Out
            </Button>
          </Link>
      </Form>
    </div>
);}
