// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Row, Col, Button, Form, FormSelect } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const {aid} = useParams();
    const { pathname } = useLocation();
    console.log(pathname)
    const assignment = db.assignments.find((assgn: any) => aid && assgn._id === aid);
    if (!assignment) return;
    const submitOptions = [
      "Text Entry",
      "Website URL",
      "Media Recording",
      "Student Annotation",
      "File Upload"
    ];
    return (
      <div id="wd-assignments-editor">
                <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column xxl={12}> Assignment Name </Form.Label>
                    <Col sm={11}>
                    <Form.Control type="email" placeholder="A1" defaultValue={assignment.title} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    <Col sm={11}>
                    <Form.Control as="textarea" style={{height: "200px"}}
                      defaultValue={assignment.description}
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" column sm={3}> Points </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="points..." defaultValue={assignment.points} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" as="legend" column sm={3}>
                        Assignment Group </Form.Label>
                    <Col sm={8}>
                        <FormSelect defaultValue={assignment.group}>
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
                        <FormSelect defaultValue={assignment.gradeDisplay}>
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
                            <FormSelect defaultValue={assignment.submissionType}>
                              <option value="ONLINE">Online</option>
                              <option value="PHYSICAL">Physical</option>
                              <option value="PRESENTATION">Presentation</option>
                            </FormSelect>
                            <Form.Group>
                              <Form.Label column className="wd-assgn-edit-label mb-0">
                                Online Entry Options
                              </Form.Label>
                              {submitOptions.map((option: string) => (
                                <Form.Check
                                  key={option}
                                  className="wd-assgn-edit-checkbox"
                                  type="checkbox"
                                  label={option}
                                  defaultChecked={(assignment.onlineSubmitType as string[]).includes(option)}
                                />
                              ))}
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
                                <Form.Control type="email" placeholder="Everyone" defaultValue={assignment.assignTo} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column  className="wd-assgn-edit-label" xxl={12}> Due</Form.Label>
                                <Col sm={11}>
                                <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.dueDate} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available From</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.availableOn} />
                                      </Col>
                                  </Form.Group>
                                </Col>
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available Until</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" defaultValue={assignment.availableUntil} />
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
                    <Link to={`/Kambaz/Courses/${assignment.course}/Assignments`}><Button variant="danger">Submit</Button></Link>
                  </Col>
                </Form.Group>
            </Form>
      </div>
  );}
  