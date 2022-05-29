const solve = require("./a-very-big-sum")

function main(inputAsString) {
  const input = inputAsString.replace(/\s+$/g, "").split("\n");
  const n = parseInt(input[0], 10);
  const arr = input[1].split(" ").map((n) => parseInt(n, 10));
  const result = solve(n, arr)

  return String(result);
}

module.exports = main;
