// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random()*100)]);
    }
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index))
    }
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn text-white bg-success">Add Element</button>
            <ul className="list-group">
                {array.map((item, index) => (
                    <li key={index} className="list-group-item h4 d-flex justify-content-between w-50">
                        {item}
                        <button onClick={() => deleteElement(index)} className="btn bg-danger text-white">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}