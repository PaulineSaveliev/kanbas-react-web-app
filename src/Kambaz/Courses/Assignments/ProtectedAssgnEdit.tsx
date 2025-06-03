// Pauline Saveliev
// CS5610 - Summer 1 2025


import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function ProtectedRoute({children, to} : {children: any; to: string}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    if(currentUser && currentUser.role === "FACULTY") {
        return (
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                                    as={Link} to={to}
                                >
                {children}
            </ListGroup.Item>
        );
    } else {
        return (
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                {children}
            </ListGroup.Item>
        )
    }
}