const router = require("express").Router();
const userRoutes = require("./user-routes");
const interestsRoutes = require("./interests-routes");

router.use("/users", userRoutes);
router.use("/interests", interestsRoutes);

module.exports = router;
