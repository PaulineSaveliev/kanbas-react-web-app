// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, Card, Col, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import * as db from "../Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, 
    deleteCourse, updateCourse}: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }
) {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
          <button className="btn btn-primary float-end align-center"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse}>Add</button>
          <button className="btn btn-warning me-2 float-end align-center"
                  id="wd-update-course-click"
                  onClick={updateCourse}>Update</button>
        </h5><br />
        <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({...course, name: e.target.value})} />
        <FormControl value={course.description} className="mb-3" onChange={(e) => setCourse({...course, description: e.target.value})} />
        <FormControl value={course.number} className="mb-2" onChange={(e) => setCourse({...course, number: e.target.value})} />
        <FormControl type="date" value={course.startDate} className="mb-2" onChange={(e) => setCourse({...course, startDate: e.target.value})} />
        <FormControl type="date" value={course.endDate} className="mb-2" onChange={(e) => setCourse({...course, endDate: e.target.value})} />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses.map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src={`/images/${course.image}.jpg`} width="100%" height={160}/>
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                    <Button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end" id="wd-delete-course-click">Delete</Button>
                    <Button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }} className="btn btn-warning me-2 float-end" id="wd-edit-course-click">Edit</Button>
                  </Card.Body>
                </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        </div>

  );}

