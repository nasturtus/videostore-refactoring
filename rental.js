var customer = require("./customer");
var movies = require("./movies");
var movieFor = require("./movieFor");
var amountFor = require("./amountFor");
var frequentRenterPointsFor = require("./frequentRenterPointsFor");

function statement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    frequentRenterPoints += frequentRenterPointsFor(r);
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`;
    totalAmount += amountFor(r);
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

console.log(statement(customer, movies));
