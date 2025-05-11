// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function Assignments() {
    return (
        <div id="wd-course-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button type="button" id="wd-assgn-group">+ Group</button>
            <button type="button" id="wd-assgn-add">+ Assignment</button>
            <h3 id="wd-assignments-title">
            ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - HISTORY
                    </a>
                    <p>Multiple Modules | <b>Not available until</b> May 13 at 12:00am |</p>
                    <p><b>Due</b> May 18 at 12:00am</p>
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A2 - WATER
                    </a>
                    <p>Multiple Modules | <b>Not available until</b> May 18 at 12:00am |</p>
                    <p><b>Due</b> May 25 at 12:00am</p>
                </li>
            </ul>
            <h3 id="wd-assignments-title">
                QUIZZES 20% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Q1 - History
                    </a>
                    <p>Module 1 | <b>Not available until</b> May 13 at 12:00am |</p>
                    <p><b>Due</b> May 20 at 12:00am</p>
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Q2 - Water
                    </a>
                    <p>Module 2 | <b>Not available until</b> May 20 at 12:00am |</p>
                    <p><b>Due</b> May 27 at 12:00am</p>
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Q3 - Terrestrial Environments
                    </a>
                    <p>Module 3 | <b>Not available until</b> May 27 at 12:00am |</p>
                    <p><b>Due</b> June 6 at 12:00am</p>
                </li>
            </ul>
            <h3 id="wd-assignments-title">
                EXAMS 30% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Midterm
                    </a>
                    <p>Multiple Modules | <b>Not available until</b> May 25 at 12:00am |</p>
                    <p><b>Due</b> May 25 at 11:59pm</p>
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Final Exam
                    </a>
                    <p>Multiple Modules | <b>Not available until</b> June 22 at 12:00am |</p>
                    <p><b>Due</b> June 22 at 11:59pm</p>
                </li>
            </ul>
            <h3 id="wd-assignments-title">
                PROJECTS 10% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        Disasters Final Project
                    </a>
                    <p>Module 3 | <b>Not available until</b> June 1 at 12:00am |</p>
                    <p><b>Due</b> June 20 at 12:00am</p>
                </li>
            </ul>
        </div>
    );
}