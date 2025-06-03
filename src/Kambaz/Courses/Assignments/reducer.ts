// Pauline Saveliev
// CS5610 - Summer 1 2025

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {assignments: assignments,};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                ...assignment,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log(state.assignments);
            return;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
    editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
            a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;