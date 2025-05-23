// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariabe() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
            date.getMonth() + 1
            }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    return (
        <div id="wd-date-state-variables">
            <h2>Date String Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <FormControl
                type="date"
                defaultValue={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))} />
            <hr />
        </div>
    )
}