const mongoose = require("mongoose");
const { Schema } = mongoose;
const ResumeListSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  resumeList: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("resumelist", ResumeListSchema);
