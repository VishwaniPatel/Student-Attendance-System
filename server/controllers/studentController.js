const Student = require("../models/Student");

// Adds a new student with validation & duplicate check
exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};


// update attendance absent/present
exports.updateAttendance = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { isPresent: req.body.isPresent },
      { new: true }
    );

    // If student not found
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Delete students
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    // If student not found
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};