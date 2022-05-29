const insertionSort1 = require("./insertion-sort-part-1");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input[0], 10);
  const arr = input[1].split(" ").map((n) => parseInt(n, 10));
  const result = insertionSort1(n, arr);

  return result.join("\n");
}

module.exports = main;
