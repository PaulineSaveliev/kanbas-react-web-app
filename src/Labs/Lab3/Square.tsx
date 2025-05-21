// Pauline Saveliev
// CS5610 - Summer 1 2025

import { type ReactNode } from "react";

export default function Square({children}: { children: ReactNode}) {
    const num = Number(children);
    return <span id="wd-square">{num * num}</span>
}