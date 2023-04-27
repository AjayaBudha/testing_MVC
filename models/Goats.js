const goats = require("../data");

class Goat {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
  }

  static get all() {
    return goats.map((goat) => new Goat(goat));
  }

  static findById(id) {
    try {
      const goatData = goats.filter((goat) => goat.id === id)[0];
      const goat = new Goat(goatData);
      return goat;
    } catch (err) {
      throw new Error("This goat does not exist!");
    }
  }

  static create(goat) {
    const lastId = goats.reduce((g1, g2) => (g1.id > g2.id ? g1 : g2)).id;
    const newGoatId = lastId + 1;
    const newGoat = new Goat({ id: newGoatId, ...goat });
    goats.push(newGoat);
    return newGoat;
  }
}

module.exports = Goat;
