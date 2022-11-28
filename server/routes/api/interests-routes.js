const {
  getInterests,
  createInterests,
} = require("../../controllers/interests-controller");

const router = require("express").Router();
router.route("/").get(getInterests);
router.route("/").post(createInterests);

module.exports = router;
