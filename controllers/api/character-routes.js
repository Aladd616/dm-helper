const router = require("express").Router();
const { User, Character, Ability, AbilityList } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const charactersData = await Character.findAll();

    res.status(200).json(charactersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const charactersData = await Character.findone();

    res.status(200).json(charactersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post;
