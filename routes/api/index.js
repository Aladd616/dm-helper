const router = require("express").Router();
const characterRoutes = require("./character-routes");
const userRoutes = require("./user-routes");
const abilityRoutes = require("./ability-routes");

router.use("/characters", characterRoutes);
router.use("/users", userRoutes);
router.use("/abilities", abilityRoutes);

module.exports = router;
