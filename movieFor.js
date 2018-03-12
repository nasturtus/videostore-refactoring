var movies = require("./movies");

module.exports = function movieFor(rental) {
  return movies[rental.movieID];
};
