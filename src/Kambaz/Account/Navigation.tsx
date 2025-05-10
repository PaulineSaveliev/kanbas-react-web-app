// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/>
            <Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/>
            <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/>
        </div>
    )
}