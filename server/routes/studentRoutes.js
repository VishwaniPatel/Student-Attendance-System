const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  updateAttendance,
  deleteStudent,
} = require("../controllers/studentController");

const { validateStudent } = require("../middleware/studentValidation");

// api
router.post("/students", validateStudent, addStudent);
router.get("/students", getStudents);
router.put("/students/:id/attendance", updateAttendance);
router.delete("/students/:id", deleteStudent);

module.exports = router;