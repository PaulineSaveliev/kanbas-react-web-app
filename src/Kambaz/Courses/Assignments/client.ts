// Pauline Saveliev
// CS5610 - Summer 1 2025

import axios from "axios";
const axiosWithCredentials = axios.create({withCredentials: true});
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const ASSGN_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(
        `${ASSGN_API}/${assignmentId}`
    );
    return response.data;
}
export const updateAssignment = async (assignment: any) => {
    console.log(assignment);
    const { data } = await axiosWithCredentials.put(
        `${ASSGN_API}/${assignment._id}`, assignment
    );
    return data;
}
export const getAssignmentById = async (assignmentId: any) => {
    const { data } = await axiosWithCredentials.get(
        `${ASSGN_API}/${assignmentId}`
    );
    return data;
}