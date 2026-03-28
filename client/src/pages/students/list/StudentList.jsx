import React from 'react'
import { deleteStudent, updateAttendance } from "../../../services/studentService";
import AttendanceToggle from "./components/AttendanceToggle";

const StudentList = ({ students, refresh }) => {
     // Function to toggle attendance Present/Absent
    const toggleAttendance = async (id, current) => {
        await updateAttendance(id, { isPresent: !current });
        // Refresh student list after update
        refresh();
    };

     // Function to delete a student
    const handleDelete = async (id) => {
        await deleteStudent(id);
        refresh();
    };
  return (
       // Start: table
        <table>
            {/* Start: table header */}
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Roll No</th>
                    <th>Attendance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {/* End: table header */}

            {/* Start: table body */}
            <tbody>
                {/* Display student list */}
                {students.map((student) => (
                    <tr key={student._id}>
                        <td>{student.name}</td>
                        <td>{student.rollNo}</td>

                        {/* Toggle Button */}
                        <td>
                            <AttendanceToggle
                                isPresent={student.isPresent}
                                onToggle={() => toggleAttendance(student._id, student.isPresent)}
                            />
                        </td>

                        {/* Delete button */}
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(student._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            {/* End: table body */}
        </table>
        // End: table
  )
}

export default StudentList