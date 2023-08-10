const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGODB_URL;

const mongoDB = async () => {
  await mongoose.connect(
    mongoURL,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log("!!!!! ERROR !!!!!");
        console.log(err);
      } else {
        console.log("Database Connected Successfully !!");
      }
    }
  );
};
module.exports = mongoDB;
