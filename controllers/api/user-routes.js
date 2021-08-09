const router = require("express").Router();
const { User, Character, Ability, AbilityList } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findone();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
