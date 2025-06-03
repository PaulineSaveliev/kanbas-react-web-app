// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Row, Col, Button, Form, FormSelect } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer"
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function AssignmentEditor() {
    const dispatch = useDispatch();
    const {cid, aid} = useParams();
    const navigate = useNavigate();
    const {assignments} = useSelector((state: any) => state.assignmentReducer)
    const [mode, setMode] = useState("edit");
    const [assignment, setAssignment] = useState(assignments.find((assgn: any) => aid && assgn._id === aid))
    
    if (!assignment) {
      setMode("create");
      setAssignment( {
          _id: uuidv4(),
          title: "New Assignment",
          course: cid,
          description: "",
          points: 100,
          group: "ASSIGNMENTS",
          gradeDisplay: "POINTS",
          submissionType: "ONLINE",
          onlineSubmitType: [],
          assignTo: "Everyone",
          availableOn: new Date().toISOString(),
          dueDate: new Date().toISOString(),
          availableUntil: new Date().toISOString(),
          });
    };
    const submitOptions = [
      "Text Entry",
      "Website URL",
      "Media Recording",
      "Student Annotation",
      "File Upload"
    ];
    if(!assignment) return;
    return (
      <div id="wd-assignments-editor">
                <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column xxl={12}> Assignment Name </Form.Label>
                    <Col sm={11}>
                    <Form.Control type="email" placeholder="A1" defaultValue={assignment.title}
                      onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    <Col sm={11}>
                    <Form.Control as="textarea" style={{height: "200px"}}
                      defaultValue={assignment.description}
                      onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} 
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" column sm={3}> Points </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="points..." defaultValue={assignment.points}
                      onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}  />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" as="legend" column sm={3}>
                        Assignment Group </Form.Label>
                    <Col sm={8}>
                        <FormSelect defaultValue={assignment.group} 
                          onChange={(e) => setAssignment({ ...assignment, group: e.target.value })} >
                      <option value="ASSIGNMENTS">Assignments</option>
                      <option value="QUIZZES">Quizzes</option>
                      <option value="EXAMS">Exams</option>
                      <option value="PROJECTS">Projects</option>
                    </FormSelect>
                    </Col>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={3} className="text-end" >
                        Display Grade as </Form.Label>
                    <Col sm={8}>
                        <FormSelect defaultValue={assignment.gradeDisplay} 
                          onChange={(e) => setAssignment({ ...assignment, gradeDisplay: e.target.value })} >
                          <option value="PERCENTAGE">Percentage</option>
                          <option value="POINTS">Points</option>
                        </FormSelect>
                    </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" column sm={3}> Submission Type </Form.Label>
                    <Col sm={8}>
                        <div className="wd-gray-box">
                          <Col>
                            <FormSelect defaultValue={assignment.submissionType} 
                              onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })} >
                              <option value="ONLINE">Online</option>
                              <option value="PHYSICAL">Physical</option>
                              <option value="PRESENTATION">Presentation</option>
                            </FormSelect>
                            <Form.Group>
                              <Form.Label column className="wd-assgn-edit-label mb-0">
                                Online Entry Options
                              </Form.Label>
                              {submitOptions.map((option: string) => {
                                const isChecked = (assignment.onlineSubmitType as string[]).includes(option);
                                return (
                                  <Form.Check
                                    key={option}
                                    className="wd-assgn-edit-checkbox"
                                    type="checkbox"
                                    label={option}
                                    checked={isChecked}
                                    onChange={(e) => {
                                      const updatedOptions = e.target.checked
                                        ? [...assignment.onlineSubmitType, option]
                                        : assignment.onlineSubmitType.filter((val: string) => val !== option);
                                      setAssignment({ ...assignment, onlineSubmitType: updatedOptions });
                                    }}
                                  />
                                );
                              })}
                            </Form.Group>
                          </Col>
                        </div>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" column sm={3}> Assign </Form.Label>
                    <Col sm={8}>
                        <div className="wd-gray-box">
                          <Col>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column  className="wd-assgn-edit-label" xxl={12}> Assign To </Form.Label>
                                <Col sm={11}>
                                <Form.Control type="email" placeholder="Everyone" defaultValue={assignment.assignTo} 
                                  onChange={(e) => setAssignment({ ...assignment, assignTo: [e.target.value] })} 
                                />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column  className="wd-assgn-edit-label" xxl={12}> Due</Form.Label>
                                <Col sm={11}>
                                <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.dueDate}
                                  onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available From</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.availableOn}
                                        onChange={(e) => setAssignment({ ...assignment, availableOn: e.target.value })}  />
                                      </Col>
                                  </Form.Group>
                                </Col>
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available Until</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.availableUntil}
                                      onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}  />
                                      </Col>
                                  </Form.Group>
                                </Col>
                            </Form.Group>
                          </Col>
                        </div>
                    </Col>
                </Form.Group>
                <hr />
                <Form.Group className="mb-3">
                  <Col sm={11} className="d-flex justify-content-end">
                    <Link to={`/Kambaz/Courses/${assignment.course}/Assignments`}><Button variant="secondary" className="me-2">Cancel</Button></Link>
                    <Button variant="danger"
                      onClick={() => {
                        if (mode === "edit") {
                          dispatch(updateAssignment(assignment))
                        } else {
                          dispatch(addAssignment(assignment));
                        }
                        navigate(`/Kambaz/Courses/${assignment.course}/Assignments`);
                      }}
                      >Save</Button>
                  </Col>
                </Form.Group>
            </Form>
      </div>
  );}
  