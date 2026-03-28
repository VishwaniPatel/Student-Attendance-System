import axios from "axios";

// Base url to perform api call
const BASE_URL = "http://localhost:3000/api";

// to get all student data
export const getStudents = async () => {
  return await axios.get(`${BASE_URL}/students`);
};

// to delete student
export const addStudent = async (data) => {
  return await axios.post(`${BASE_URL}/students`, data);
};

// update student attendance present/absent
export const updateAttendance = async (id, data) => {
  return await axios.put(`${BASE_URL}/students/${id}/attendance`, data);
};

// delete student data
export const deleteStudent = async (id) => {
  return await axios.delete(`${BASE_URL}/students/${id}`);
};