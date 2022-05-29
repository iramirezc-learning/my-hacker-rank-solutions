const minimumSwaps2 = require("./minimum-swaps-2");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const arr = input[1]
    .trim()
    .split(" ")
    .map((n) => parseInt(n, 10));
  const result = minimumSwaps2(arr);

  return String(result);
}

module.exports = main;
