const jumping = require("./jumping-on-the-clouds");

function main(inputAsString) {
  const lines = inputAsString.trim().split("\n");
  const arr = lines[1]
    .replace(/\s+$/g, "")
    .split(" ")
    .map((n) => parseInt(n, 10));

  const result = jumping(arr);

  return String(result);
}

module.exports = main;
