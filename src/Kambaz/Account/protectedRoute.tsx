// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children} : {children: any}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    if(currentUser) {
        return children;
    } else {
        return <Navigate to="/Kambaz/Account/Signin" />
    }
}