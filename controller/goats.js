const Goat = require("../models/Goats");
const index = (req, res) => {
  const goatData = Goat.all;
  res.send(goatData);
};

module.exports = {
  index,
};
