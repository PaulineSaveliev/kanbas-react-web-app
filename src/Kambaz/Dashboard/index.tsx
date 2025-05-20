// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1111/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/envrSci.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR1111 Fundamentals</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Environmental Science Fundamentals</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/2222/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/oceanography.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR2222 Oceanography</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Ocean Ecology and Geology</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/3333/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/sustDev.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR3333 Sust Dev</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Urban planning and design</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/4444/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/water.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR4444 Water Resources</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Natural and Man-Made water sources</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/5555/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/mountain.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR5555 GeoInfo Systems</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                ArcGIS Intro Course</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/6666/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/gavel.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR6666 Envr Pol</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Environmental laws and politics</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/7777/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/forest.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">ENVR7777 Ecology</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Natural systems and interactions</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          </Row>
        </div>
        </div>

  );}

