const array2d = require("./2d-array-ds");

function main(inputAsString) {
  const input = inputAsString.replace(/\s+$/g, "").split("\n");
  const arr = input.map((line) =>
    line
      .trim()
      .split(" ")
      .map((n) => parseInt(n, 10))
  );
  const result = array2d(arr);

  return String(result);
}

module.exports = main;
