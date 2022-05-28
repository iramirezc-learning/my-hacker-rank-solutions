const insertionSort2 = require("./insertion-sort-part-2");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input.shift(), 10);
  const arr = input[0]
    .trim()
    .split(" ")
    .map((n) => parseInt(n, 10));
  const result = insertionSort2(n, arr);

  return result.join("\n");
}

module.exports = main;
