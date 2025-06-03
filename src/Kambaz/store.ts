// Pauline Saveliev
// CS5610 - Summer 1 2025

import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer"

const store = configureStore({
    reducer: {
        modulesReducer
    },
});

export default store;