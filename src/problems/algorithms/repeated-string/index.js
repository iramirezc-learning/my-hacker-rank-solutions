const repeatedString = require("./repeated-string");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const s = input[0].trim();
  const n = parseInt(input[1].trim(), 10);
  const result = repeatedString(s, n);

  return String(result);
}

module.exports = main;
