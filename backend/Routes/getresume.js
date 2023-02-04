const express = require("express");
const router = express.Router();
const ResumeList = require("../models/ResumeList");
router.post("/saveResume", async (req, res) => {
  let data = req.body.resumeDetails;
  let user_id = await ResumeList.findOne({ email: req.body.email });
  if (user_id) {
    try {
      await ResumeList.findOneAndUpdate(
        {
          email: req.body.email,
        },
        {
          $push: { resumeList: data },
        }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await ResumeList.create({
        email: req.body.email,
        resumeList: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  }
});

router.post("/getResumeList", async (req, res) => {
  try {
    let id = await ResumeList.findOne({ email: req.body.email });
    res.json({ resumeList: id.resumeList });
  } catch (error) {
    console.log(error.message);
    res.send("Error", error.message);
  }
});

module.exports = router;
