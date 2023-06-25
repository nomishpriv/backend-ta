//External Lib Import
const mongoose = require("mongoose");
const { error } = require("../helper/ErrorHandler");
const DATABASE_URL = 'mongodb://mongo:rjoJNpEL0fMvLQWEHzno@containers-us-west-35.railway.app:6846'
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(DATABASE_URL + " DB Connected Successfully...");
  } catch (error) {
    console.log(error);
    console.log(DATABASE_URL + " DB Connected Failure...");
  }
};

module.exports = connectDB;
