const countingValleys = require("./counting-valleys");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const path = input[1].trim();
  const result = countingValleys(path);

  return String(result);
}

module.exports = main;
