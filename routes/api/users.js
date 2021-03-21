const express = require("express");
const router = express.Router();
const Candidate = require("../../model/Candidate");
// this is the route for the user to add the likes to their candidate
router.put("/like/:username/:cadID", async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.cadID);
    if (
      candidate.likes.filter(
        like => like.user.toString() == req.params.username
      ).length > 0
    ) {
      return res.status(400).json({msg: "already liked"});
    }
    candidate.likes.unshift({user: req.params.username});
    await candidate.save();
    res.json(candidate.likes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
