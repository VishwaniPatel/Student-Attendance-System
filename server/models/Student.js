const mongoose = require("mongoose");

// Define student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", studentSchema);