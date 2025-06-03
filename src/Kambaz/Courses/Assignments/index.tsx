// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, FormControl, FormGroup, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AsgnControl";
import SectionControlButtons from "./SectionControl";
import { FiEdit } from "react-icons/fi";
import "../../styles.css"
import { FaPlus, FaSearch } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProtectedEdit from "../protectedEdit";
import ProtectedAssgnEdit from "./ProtectedAssgnEdit";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer"

export default function Assignments() {
    const {cid} = useParams();
    const { pathname } = useLocation();
    const {assignments} = useSelector((state: any) => state.assignmentReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeAssignments = assignments.filter((assgn: any) => cid && assgn.course === cid);
    console.log(assignments);

    const formatDate = (date: Date) => {
        return date.toString().slice(0, 10);
    }
    return (
        <div id="wd-course-assignments">
            <FormGroup className="mb-3 d-flex justify-content-between align-items-center" controlId="wd-email">
                <InputGroup className="wd-search-box">
                    <InputGroup.Text> <FaSearch /> </InputGroup.Text>
                    <FormControl type="text" placeholder="Search..."/>
                </InputGroup>
                <ProtectedEdit>
                <div className="d-flex">
                    <Button variant="secondary" className="d-flex align-items-center me-2" id="wd-add-group-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        <span>Group</span>
                    </Button>
                    <Button onClick={() => {
                        navigate(`${pathname}/newAssgn`);
                    }}
                    variant="danger" className="d-flex align-items-center" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        <span>Assignment</span>
                    </Button>
                </div>
                </ProtectedEdit>
            </FormGroup>

            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <span className="wd-assignment-head">ASSIGNMENTS</span>
                    <div className="wd-section-right-actions">
                        <span className="wd-section-percent wd-border-thin me-2">40% of total</span>
                        <ProtectedEdit>
                        <SectionControlButtons />
                        </ProtectedEdit>
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {activeAssignments
                            .filter((assgn: any) => assgn.group === "ASSIGNMENTS")
                            .map((assgn: any) => (
                                <ProtectedAssgnEdit to={`${pathname}/${assgn._id}`}>
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <ProtectedEdit>
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        </ProtectedEdit>
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {formatDate(assgn.availableOn)} at 12:00am |<br />
                                            <b>Due</b> {formatDate(assgn.dueDate)} at 12:00am<br />
                                        </div>
                                    </div>
                                    <ProtectedEdit>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                    </ProtectedEdit>
                                </ProtectedAssgnEdit>
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
                        <ProtectedEdit>
                        <SectionControlButtons />
                        </ProtectedEdit>
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {activeAssignments
                            .filter((assgn: any) => assgn.group === "QUIZZES")
                            .map((assgn: any) => (
                                <ProtectedAssgnEdit to={`${pathname}/${assgn._id}`}>
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <ProtectedEdit>
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        </ProtectedEdit>
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <ProtectedEdit>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                    </ProtectedEdit>
                                </ProtectedAssgnEdit>
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
                        <ProtectedEdit>
                        <SectionControlButtons />
                        </ProtectedEdit>
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {activeAssignments
                            .filter((assgn: any) => assgn.group === "PROJECTS")
                            .map((assgn: any) => (
                                <ProtectedAssgnEdit to={`${pathname}/${assgn._id}`}>
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <ProtectedEdit>
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        </ProtectedEdit>
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <ProtectedEdit>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                    </ProtectedEdit>
                                </ProtectedAssgnEdit>
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
                        <ProtectedEdit>
                        <SectionControlButtons />
                        </ProtectedEdit>
                        </div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        {activeAssignments
                            .filter((assgn: any) => assgn.group === "EXAMS")
                            .map((assgn: any) => (
                                <ProtectedAssgnEdit to={`${pathname}/${assgn._id}`}>
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <ProtectedEdit>
                                        <FiEdit style={{ top: "2px" }} className="text-success me-3" />
                                        </ProtectedEdit>
                                        <div>
                                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-head">
                                                {assgn.title}
                                            </a><br />
                                            <span className="text-danger me-2">Multiple Modules</span>
                                            |<b> Not available until</b> {assgn.availableOn} at 12:00am |<br />
                                            <b>Due</b> {assgn.dueDate} at 12:00am<br />
                                        </div>
                                    </div>
                                    <ProtectedEdit>
                                    <div className="ms-3">
                                        <AssignmentControlButtons />
                                    </div>
                                    </ProtectedEdit>
                                </ProtectedAssgnEdit>
                            ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}