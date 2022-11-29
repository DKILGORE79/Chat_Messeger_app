const router = require("express").Router();
const userRoutes = require("./user-routes");
const interestsRoutes = require("./interestsRoutes");
router.use("/users", userRoutes);

router.use("/Interests", interestsRoutes);

module.exports = router;
