// Pauline Saveliev
// CS5610 - Summer 1 2025

import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
    },
});

export default store;