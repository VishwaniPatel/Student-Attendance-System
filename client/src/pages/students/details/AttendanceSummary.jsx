import React from 'react'

// Component receives a list of students as props
const AttendanceSummary = ({ students }) => {
   // Total number of students
    const total = students.length;

    // Count students where isPresent = true
    const presentStudentsList = students.filter((student) => student.isPresent);

    const present = presentStudentsList.length;

    // Absent students = total - present
    const absent = total - present;

    return (

        <div style={{ marginTop: "20px" }}>

            {/* Display summary data */}
            <h3>Attendance Summary</h3>
            <p>Total Students: {total}</p>
            <p>Present Students: {present}</p>
            <p>Absent Students: {absent}</p>

        </div>
    );
}

export default AttendanceSummary