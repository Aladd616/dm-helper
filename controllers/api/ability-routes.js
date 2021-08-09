const router = require("express").Router();
const { User, Character, Ability, AbilityList } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const abilityData = await Ability.findAll();

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const abilityData = await Ability.findone();

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
