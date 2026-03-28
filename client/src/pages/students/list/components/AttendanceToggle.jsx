import React from 'react'

const AttendanceToggle = ({ isPresent, onToggle }) => {
  return (
     // button to toggle present/absent
    <button
      className={`toggle-btn ${isPresent ? "present" : "absent"}`}
      onClick={onToggle}
    >
      {isPresent ? "Present" : "Absent"}
    </button>
  )
}

export default AttendanceToggle