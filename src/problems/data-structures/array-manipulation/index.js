const arrayManipulation = require("./array-manipulation");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const [n] = input
    .shift()
    .trim()
    .split(" ")
    .map((n) => parseInt(n, 10));
  const queries = input.map((line) =>
    line
      .trim()
      .split(" ")
      .map((n) => parseInt(n, 10))
  );
  const result = arrayManipulation(n, queries);

  return String(result);
}

module.exports = main;
