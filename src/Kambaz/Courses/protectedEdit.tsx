// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useSelector } from "react-redux";

export default function ProtectedEdit({children} : {children: any}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    if(currentUser && currentUser.role === "FACULTY") {
        return children;
    } else {
        return;
    }
}