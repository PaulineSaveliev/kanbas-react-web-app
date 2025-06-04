// Pauline Saveliev
// CS5610 - Summer 1 2025

import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4} from "uuid";

const initialState = {enrollments: enrollments,};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment: any = {
                ...enrollment,
                _id: uuidv4(),
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            console.log(state.enrollments)
        },
        deleteEnrollment: (state, { payload: enrId }) => {
            state.enrollments = state.enrollments.filter(
                (a: any) => a._id !== enrId);
        },
    },
});

export const { addEnrollment, deleteEnrollment} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;