// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, FormControl, FormGroup, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AsgnControl";
import SectionControlButtons from "./SectionControl";
import { FiEdit } from "react-icons/fi";
import "../../styles.css"
import { FaPlus, FaSearch } from "react-icons/fa";

export default function Assignments() {
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
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                    <div>
                                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                            A1 - HISTORY
                                        </a><br />
                                        <span className="text-danger me-2">Multiple Modules</span>
                                        |<b> Not available until</b> May 13 at 12:00am |<br />
                                        <b>Due</b> May 18 at 12:00am<br />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <AssignmentControlButtons />
                                </div>
                            </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                        A2 - WATER
                                    </a><br />
                                    <span className="text-danger me-2">Multiple Modules</span>
                                    |<b> Not available until</b> May 18 at 12:00am |<br />
                                    <b>Due</b> May 25 at 12:00am<br />
                                </div>
                            </div>
                            <div className="ms-3">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
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
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                    <div>
                                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                            Q1 - History
                                        </a><br />
                                        <span className="text-danger me-2">Module 1</span>
                                        |<b> Not available until</b> May 13 at 12:00am |<br />
                                        <b>Due</b> May 20 at 12:00am<br />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <AssignmentControlButtons />
                                </div>
                            </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                        Q2 - Water
                                    </a><br />
                                    <span className="text-danger me-2">Module 2</span>
                                    |<b> Not available until</b> May 20 at 12:00am |<br />
                                    <b>Due</b> May 27 at 12:00am<br />
                                </div>
                            </div>
                            <div className="ms-3">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                        Q3 - Terrestrial Environments
                                    </a><br />
                                    <span className="text-danger me-2">Module 3</span>
                                    |<b> Not available until</b> May 27 at 12:00am |<br />
                                    <b>Due</b> June 6 at 12:00am<br />
                                </div>
                            </div>
                            <div className="ms-3">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">EXAMS</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">30% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                    <div>
                                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                            Midterm
                                        </a><br />
                                        <span className="text-danger me-2">Multiple Modules</span>
                                        |<b> Not available until</b> May 25 at 12:00am |<br />
                                        <b>Due</b> May 25 at 11:59pm<br />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <AssignmentControlButtons />
                                </div>
                            </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                <div>
                                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                        Final Exam
                                    </a><br />
                                    <span className="text-danger me-2">Multiple Modules</span>
                                    |<b> Not available until</b> May June 22 at 12:00am |<br />
                                    <b>Due</b> June 22 at 11:59pm<br />
                                </div>
                            </div>
                            <div className="ms-3">
                                <AssignmentControlButtons />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">PROJECT</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">10% of total</span>
                        <SectionControlButtons />
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                    <div>
                                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                            Disasters Final projecy
                                        </a><br />
                                        <span className="text-danger me-2">Module 3</span>
                                        |<b> Not available until</b> June 1 at 12:00am |<br />
                                        <b>Due</b> June 20 at 12:00am<br />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <AssignmentControlButtons />
                                </div>
                            </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}