// Pauline Saveliev
// CS5610 - Summer 1 2025

import { type ReactNode } from "react";

export default function Highlight({children}: {children: ReactNode}) {
    return (
        <span id="wd-highlight" style={{background: "yellow", color: "red"}}>
            {children}
        </span>
    )
}