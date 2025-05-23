// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("Richard");
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <FormControl
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            <hr />
        </div>
    )
}