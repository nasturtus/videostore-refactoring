var movieFor = require('./movieFor')

module.exports = function frequentRenterPointsFor(r) {
    frequentRenterPoints = 1;
    // add bonus for a two day new release rental
    if (movieFor(r).code === "new" && r.days > 2) frequentRenterPoints++;
    return frequentRenterPoints;
  }
  