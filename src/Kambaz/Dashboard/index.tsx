// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course1">
            <Link to="/Kambaz/Courses/1111/Home"
                  className="wd-dashboard-course-link" >
              <img src="/images/envrSci.jpg" width={200} />
              <div>
                <h5> ENVR1111 Fundamentals </h5>
                <p className="wd-dashboard-course-title">
                  Environmental Science Fundamentals  </p>
                <button> Go </button>
              </div>
            </Link>
          </div>
          <div className="wd-dashboard-course2"> 
            <Link to="/Kambaz/Courses/2222/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/oceanography.jpg" width={200} />
                <div>
                <h5> ENVR2222 Oceanography </h5>
                <p className="wd-dashboard-course-title">
                    Ocean Ecology and Geology  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
          <div className="wd-dashboard-course3"> 
            <Link to="/Kambaz/Courses/3333/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/sustDev.jpg" width={200} />
                <div>
                <h5> ENVR3333 Sustainable Development </h5>
                <p className="wd-dashboard-course-title">
                    Urban planning and design  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
          <div className="wd-dashboard-course4"> 
            <Link to="/Kambaz/Courses/4444/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/water.jpg" width={200} />
                <div>
                <h5> ENVR4444 Water Resources </h5>
                <p className="wd-dashboard-course-title">
                    Natural and Man-Made water sources  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
          <div className="wd-dashboard-course5"> 
            <Link to="/Kambaz/Courses/5555/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/mountain.jpg" width={200} />
                <div>
                <h5> ENVR5555 Geo Info Systems </h5>
                <p className="wd-dashboard-course-title">
                    ArcGIS Intro Course  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
          <div className="wd-dashboard-course6"> 
            <Link to="/Kambaz/Courses/6666/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/gavel.jpg" width={200} />
                <div>
                <h5> ENVR6666 Environmental Policy </h5>
                <p className="wd-dashboard-course-title">
                    Environmental laws and politics  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
          <div className="wd-dashboard-course7"> 
            <Link to="/Kambaz/Courses/7777/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/forest.jpg" width={200} />
                <div>
                <h5> ENVR7777 Ecology </h5>
                <p className="wd-dashboard-course-title">
                    Natural systems and interactions  </p>
                <button> Go </button>
                </div>
            </Link>
          </div>
        </div>
      </div>
  );}
  