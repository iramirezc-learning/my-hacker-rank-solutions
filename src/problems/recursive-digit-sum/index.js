const digitSum = require("./recursive-digit-sum");

function main(inputAsString) {
  const input = inputAsString.trim().split(" ");
  const n = input[0];
  const k = parseInt(input[1], 10);
  const result = digitSum(n, k);

  return String(result);
}

module.exports = main;
