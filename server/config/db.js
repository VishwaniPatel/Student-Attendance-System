const mongoose = require("mongoose");

// Function to connect MongoDB database
const connectDB = async () => {
  try {
    // Function to connect MongoDB database
    await mongoose.connect(
      "mongodb+srv://vishwanipatel494_db_user:Zfd4MPaNW0Cm9jty@cluster0.admlvpp.mongodb.net/studentDB"
    );
    console.log("MongoDB Connected ");
  } catch (err) {
    console.error("DB Connection Error ", err);
    process.exit(1);
  }
};

module.exports = connectDB;