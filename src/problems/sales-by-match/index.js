const sockMerchant = require("./sales-by-match");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input[0], 10);
  const arr = input[1].split(" ").map((n) => parseInt(n, 10));
  const result = sockMerchant(n, arr);

  return String(result);
}

module.exports = main;
