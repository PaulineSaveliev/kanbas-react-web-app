// Pauline Saveliev
// CS5610 - Summer 1 2025

import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database"

export default function CourseNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
   const links = [
      {label: "Home", path: "Home"},
      {label: "Modules", path: "Modules"},
      {label: "Piazza", path: "Piazza"},
      {label: "Zoom", path: "Zoom"},
      {label: "Assignments", path: "Assignments"},
      {label: "Quizzes", path: "Quizzes"},
      {label: "People", path: "People"},
      {label: "Grades", path: "Grades"},
   ]
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-7 rounded-0">
      {links.map((link) => {
        if (!course) return;
        const actualPath = `/Kambaz/Courses/${course._id}/${link.path}`
        return(
         <ListGroup.Item key={actualPath} as={Link} to={actualPath} 
            className={`list-group-item border border-0
                  ${pathname.includes(`${link.path}`) ? "active" : "text-danger"}`}>
            {link.label}
            </ListGroup.Item>
      )})}
    </div>
);}

