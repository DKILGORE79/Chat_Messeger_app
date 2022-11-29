const router = require("express").Router();

const { user, Interests } = require("../../models");

// get all Interests

router.get("/", async (req, res) => {
  try {
    const interestData = await Interests.findAll({
      include: [{ model: user }],
    })
      .res.status(200)
      .json(interestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
