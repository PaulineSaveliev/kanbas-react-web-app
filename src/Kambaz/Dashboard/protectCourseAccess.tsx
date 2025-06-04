// Pauline Saveliev
// CS5610 - Summer 1 2025


import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function ProtectCourseAccess({children, courseId} : {children: any; courseId: string}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const enrolled = enrollments.find((enr: any) => 
        enr.user === currentUser._id && enr.course === courseId
    );
    if(currentUser && currentUser.role === "FACULTY" || enrolled) {
        return (
            <Link to={`/Kambaz/Courses/${courseId}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                {children}
            </Link>
        );
    } else {
        return (
            <div className="wd-dashboard-course-link text-decoration-none text-dark">
                {children}
            </div>
        )
    }
}