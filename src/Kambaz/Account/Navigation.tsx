// Pauline Saveliev
// CS5610 - Summer 1 2025

import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? [{label: "Profile", path: "/Kambaz/Account/Profile"}] : 
                              [{label: "Signin", path: "/Kambaz/Account/Signin"},
                               {label: "Signup", path: "/Kambaz/Account/Signup"},];
  const { pathname } = useLocation();
  const active = (path: string) => pathname.includes(path) ? "active" : ""
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-7 rounded-0">
      {links.map((link) => (
         <ListGroup.Item key={link.path} as={Link} to={link.path} 
            className={`list-group-item border border-0
                  ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
            {link.label}
            </ListGroup.Item>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}>Users</Link>
      )}
    </div>
);}