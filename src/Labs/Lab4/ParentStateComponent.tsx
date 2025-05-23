// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} />
            <hr />
        </div>
    )
}