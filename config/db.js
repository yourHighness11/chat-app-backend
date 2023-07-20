const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};
// clear
module.exports = connectDB;
