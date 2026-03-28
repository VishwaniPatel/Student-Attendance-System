const Student = require("../models/Student");

// Middleware to validate student data
exports.validateStudent = async (req, res, next) => {
  try {
    const { name, rollNo } = req.body;

    let errors = {};

    // Required field validation
    if (!name || !name.trim()) {
      errors.name = "Name is required";
    }

    if (!rollNo || !rollNo.trim()) {
      errors.rollNo = "Roll No is required";
    }

    // If validation fails, return errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Duplicate Roll No check
    const existing = await Student.findOne({ rollNo });

    if (existing) {
      return res.status(400).json({
        message: "Roll No already exists"
      });
    }
    next();

  } catch (err) {
    res.status(500).json({ message: "Validation Error" });
  }
};