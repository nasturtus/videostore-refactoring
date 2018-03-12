var movieFor = require('./movieFor')

module.exports = function amountFor(r) {
  switch (movieFor(r).code) {
    case "regular":
      thisAmount = 2;
      if (r.days > 2) {
        thisAmount += (r.days - 2) * 1.5;
      }
      break;
    case "new":
      thisAmount = r.days * 3;
      break;
    case "childrens":
      thisAmount = 1.5;
      if (r.days > 3) {
        thisAmount += (r.days - 3) * 1.5;
      }
      break;
  }
  return thisAmount;
};
