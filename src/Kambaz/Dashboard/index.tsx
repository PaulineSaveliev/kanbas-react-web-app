// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, Card, Col, FormControl, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import ProtectedEdit from '../Courses/protectedEdit';
import { useEffect, useState } from 'react';
import { addEnrollment, deleteEnrollment } from './enrReducer';
import ProtectCourseAccess from './protectCourseAccess';
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client"


export default function Dashboard() {
    //const {courses} = useSelector((state: any) => state.courseReducer)
    const [courses, setCourses] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    const {currentUser} = useSelector((state: any) => state.accountReducer);

    const [enrollVis, setEnrollVis] = useState(true)

    const activeCourses = enrollVis ? courses : allCourses;
    const [course, setCourse] = useState({name: "New Name", description: "New Description", number: "New Number", startDate: "2000-01-01", endDate: "2000-01-01", image: "courseImg", _id: 9000})
    const dispatch = useDispatch();
    const fetchCourses = async () => {
      try {
          const courses2 = await userClient.findMyCourses(currentUser);
          setCourses(courses2);
          const allCourses = await courseClient.fetchAllCourses();
          setAllCourses(allCourses);
      } catch (error) {
          console.error(error);
      }
    };
    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(course, currentUser._id);
      setCourses([...courses, newCourse]);
      fetchCourses();
    }
    const deleteCourse = async (courseId: string) => {
      const status = await courseClient.deleteCourse(courseId);
      console.log(status);
      setCourses(courses.filter((course) => course._id !== courseId));
      fetchCourses();
    }
    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      fetchCourses();
    }
    const enrollUserInCourse = async (courseId: string) => {
      await courseClient.createEnrollment(courseId, currentUser._id)
      dispatch(addEnrollment({user: currentUser._id, course: course._id}))
      fetchCourses();
    }
    const unenrollUserInCourse = async (courseId: string) => {
      await courseClient.removeEnrollment(courseId, currentUser._id)
      dispatch(deleteEnrollment({user: currentUser._id, course: course._id}))
      fetchCourses();
    }
    useEffect(() => {
        fetchCourses(); 
    }, [currentUser]);
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <ProtectedEdit>
        <h5>New Course
          <button className="btn btn-primary float-end align-center"
                  id="wd-add-new-course-click"
                  onClick={() => addNewCourse()}>Add</button>
          <button className="btn btn-warning me-2 float-end align-center"
                  id="wd-update-course-click"
                  onClick={() => updateCourse()}>Update</button>
        </h5><br />
        <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({...course, name: e.target.value})} />
        <FormControl value={course.description} className="mb-3" onChange={(e) => setCourse({...course, description: e.target.value})} />
        <FormControl value={course.number} className="mb-2" onChange={(e) => setCourse({...course, number: e.target.value})} />
        <FormControl type="date" value={course.startDate} className="mb-2" onChange={(e) => setCourse({...course, startDate: e.target.value})} />
        <FormControl type="date" value={course.endDate} className="mb-2" onChange={(e) => setCourse({...course, endDate: e.target.value})} />
        </ProtectedEdit>
        <div className="d-flex justify-content-between mt-3">
        <h2 id="wd-dashboard-published">Published Courses ({activeCourses.length})</h2> 
        <Button variant="primary"
                  id="wd-update-course-click"
                  onClick={() => {
                    setEnrollVis(!enrollVis)
                    }}>{enrollVis ?  `All Courses` : "My Courses"}</Button>
        </div>
        <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {activeCourses
              .map((course: any) => {
                const courseEnr = courses.find((c: any) => c._id === course._id);
                return (
              <Col className="wd-dashboard-course" style={{ width: "350px" }} id={`key-val-${course._id}`}>
                <Card>
                <ProtectCourseAccess courseId={course._id}>
                  <Card.Img variant="top" src={`/images/${course.image}.jpg`} width="100%" height={160}/>
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <Button variant="primary">Go</Button>
                        {!enrollVis && (
                          courseEnr ? 
                            <Button variant="danger"
                              onClick={(event) => {
                                event.preventDefault();
                                unenrollUserInCourse(course._id);
                              }}>
                              Unenroll
                            </Button>
                          : 
                            <Button variant="success"
                              onClick={(event) => {
                                event.preventDefault();
                                enrollUserInCourse(course._id);
                              }}>
                              Enroll
                            </Button>
                        )}
                      </div>
                      <ProtectedEdit>
                        <div className="d-flex gap-2 ms-auto">
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click">
                            Delete
                          </Button>
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning"
                            id="wd-edit-course-click">
                            Edit
                          </Button>
                        </div>
                      </ProtectedEdit>
                    </div>
                  </Card.Body>
                </ProtectCourseAccess>
                </Card>
              </Col>
            )})}
          </Row>
        </div>
        </div>

  );}

