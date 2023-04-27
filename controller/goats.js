const Goat = require("../models/Goats");

const index = (req, res) => {
  const goatsData = Goat.all;
  res.send(goatsData);
};

const show = (req, res) => {
  try {
    const goatId = parseInt(req.params.id);
    const selectedGoat = Goat.findById(goatId);
    res.send(selectedGoat);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
};
const create = (req, res) => {
  const data = req.body;
  const newGoat = Goat.create(data);
  res.status(201).send(newGoat);
};
module.exports = {
  index,
  show,
  create,
};
