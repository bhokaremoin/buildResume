const mongoose = require("mongoose");
const mongoURL = "";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURL,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Connected Successfully !!");
      }
    }
  );
};
module.exports = mongoDB;
