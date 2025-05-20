// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Row, Col, Button, Form, FormSelect } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
                <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column xxl={12}> Assignment Name </Form.Label>
                    <Col sm={11}>
                    <Form.Control type="email" placeholder="A1" value="A1" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    <Col sm={11}>
                    <Form.Control as="textarea" style={{height: "200px"}}
                    value="Do questions 1-15 at the back of chapter 1, then questions 4-13 at the back of chapter 2. Write a few paragraphs about the documentary in class and then include a description about yourself. sample text etc etc etc. sample text etc etc etc. sample text etc etc etc. sample text etc etc etc."
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" column sm={3}> Points </Form.Label>
                    <Col sm={8}>
                    <Form.Control type="text" placeholder="points..." value="100" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label className="text-end" as="legend" column sm={3}>
                        Assignment Group </Form.Label>
                    <Col sm={8}>
                        <FormSelect>
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
                        <FormSelect>
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
                            <FormSelect>
                              <option value="ONLINE">Online</option>
                              <option value="PHYSICAL">Physical</option>
                              <option value="PRESENTATION">Presentation</option>
                            </FormSelect>
                            <Form.Group>
                              <Form.Label column className="wd-assgn-edit-label mb-0">Online Entry Options</Form.Label>
                              <Form.Check className="wd-assgn-edit-checkbox mt-0" label="Text Entry" />
                              <Form.Check className="wd-assgn-edit-checkbox" label="Website URL" />
                              <Form.Check className="wd-assgn-edit-checkbox" label="Media Recording" />
                              <Form.Check className="wd-assgn-edit-checkbox" label="Student Annotation" />
                              <Form.Check className="wd-assgn-edit-checkbox" label="File Upload" />
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
                                <Form.Control type="email" placeholder="Everyone" value="Everyone" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column  className="wd-assgn-edit-label" xxl={12}> Due</Form.Label>
                                <Col sm={11}>
                                <Form.Control type="date" placeholder="2025-05-06" value="2025-05-06" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available From</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" value="2025-05-06" />
                                      </Col>
                                  </Form.Group>
                                </Col>
                                <Col sm={5}>
                                  <Form.Group as={Row} className="mb-3">
                                      <Form.Label column  className="wd-assgn-edit-label" xxl={12}>Available Until</Form.Label>
                                      <Col sm={11}>
                                      <Form.Control type="date" placeholder="2025-05-06" value="2025-05-08" />
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
                    <Button variant="secondary" className="me-2">Cancel</Button>
                    <Button variant="danger">Submit</Button>
                  </Col>
                </Form.Group>
            </Form>
      </div>
  );}
  