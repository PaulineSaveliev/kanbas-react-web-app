// Pauline Saveliev
// CS5610 - Summer 1 2025

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function TOC() {
 return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link to="/Labs" as={NavLink}>Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab1" as={NavLink}>Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab2" as={NavLink}>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab3" as={NavLink}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Kambaz" as={NavLink}>Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link id="wd-github" href="https://github.com/PaulineSaveliev/kanbas-react-web-app/tree/a2">My GitHub</Nav.Link>
     </Nav.Item> 
   </Nav>
);}
