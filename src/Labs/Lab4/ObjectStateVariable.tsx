// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function ObjectStateVariable() {
    const [person, setPerson] = useState({name: "Peter", age: 24});
    return (
        <div>
            <h2>Object State Variable</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <FormControl
                defaultValue={person.name}
                onChange={(e) => setPerson({...person, name: e.target.value})}
            />
            <FormControl
                defaultValue={person.age}
                onChange={(e) => setPerson({...person, 
                                            age: parseInt(e.target.value)
                })} 
            />
            <hr />
        </div>
    )
}