// Pauline Saveliev
// CS5610 - Summer 1 2025

import axios from "axios";
const axiosWithCredentials = axios.create({withCredentials: true});
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};
export const deleteCourse = async (cid: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${cid}`)
    return data;
}
export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
}