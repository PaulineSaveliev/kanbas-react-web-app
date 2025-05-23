// Pauline Saveliev
// CS5610 - Summer 1 2025

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "Hello World"
};

const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});

export default helloSlice.reducer;