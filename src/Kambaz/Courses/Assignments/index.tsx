// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, FormControl, FormGroup, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AsgnControl";
import SectionControlButtons from "./SectionControl";
import { FiEdit } from "react-icons/fi";
import "../../styles.css"
import { FaPlus, FaSearch } from "react-icons/fa";
import * as db from "../../Database";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const { pathname } = useLocation();
    const assignments = db.assignments.filter((assgn: any) => cid && assgn.course === cid);
    return (
        <div id="wd-course-assignments">
            <FormGroup className="mb-3 d-flex justify-content-between align-items-center" controlId="wd-email">
                <InputGroup className="wd-search-box">
                    <InputGroup.Text> <FaSearch /> </InputGroup.Text>
                    <FormControl type="text" placeholder="Search..."/>
                </InputGroup>
                <div className="d-flex">
                    <Button variant="secondary" className="d-flex align-items-center me-2" id="wd-add-group-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        <span>Group</span>
                    </Button>
                    <Button variant="danger" className="d-flex align-items-center" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        <span>Assignment</span>
                    </Button>
                </div>
            </FormGroup>

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">ASSIGNMENTS</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">40% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assgn: any) => assgn.group === "ASSIGNMENTS")
                            .map((assgn: any) => (
                                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                                    as={Link} to={`${pathname}/${assgn._id}`}
                                >
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">QUIZZES</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">20% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assgn: any) => assgn.group === "QUIZZES")
                            .map((assgn: any) => (
                                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                                    as={Link} to={`${pathname}/${assgn._id}`}
                                >
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">PROJECTS</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">30% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assgn: any) => assgn.group === "PROJECTS")
                            .map((assgn: any) => (
                                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                                    as={Link} to={`${pathname}/${assgn._id}`}
                                >
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">EXAMS</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">10% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {assignments
                            .filter((assgn: any) => assgn.group === "EXAMS")
                            .map((assgn: any) => (
                                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                                    as={Link} to={`${pathname}/${assgn._id}`}
                                >
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                </ListGroup.Item>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}