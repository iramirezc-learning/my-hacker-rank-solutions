const solveMeFirst = require("./solve-me-first");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const [a, b] = input.map((n) => parseInt(n, 10));
  const result = solveMeFirst(a, b);

  return String(result);
}

module.exports = main;
