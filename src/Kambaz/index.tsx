// Pauline Saveliev
// CS5610 - Summer 1 2025

import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <h1>Kambaz</h1>
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
            </Routes>
        </div>
    )
}