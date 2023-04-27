const goats = require("../data");

class Goat {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
  }
  //goat.all - property
  static get all() {
    return goats.map((goat) => new Goat(goat));
  }

  //goat.all() - method
  //   static  all() {
  //     return goats.map((goat) => new goat(goat));
  //   }
}
module.exports = Goat;
