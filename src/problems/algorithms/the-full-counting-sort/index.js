const countSort = require("./the-full-counting-sort");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  input.shift(); // get rid of the first number
  const arr = input.map((line) => line.trim().split(" "));
  const result = countSort(arr);

  return result.join(" ");
}

module.exports = main;
