const solve = require("./compare-the-triplets");

function main(inputAsString) {
  const input = inputAsString.replace(/\s+$/g, "").split("\n");
  const a = input[0].split(" ").map((n) => parseInt(n, 10));
  const b = input[1].split(" ").map((n) => parseInt(n, 10));
  const result = solve(a, b);

  return String(result.join(" "));
}

module.exports = main;
