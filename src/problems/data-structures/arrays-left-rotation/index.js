const challenge = require("./arrays-left-rotation");

function main(inputAsString) {
  const input = inputAsString.replace(/\s+$/g, "").split("\n");
  const [, d] = input[0].split(" ").map((n) => parseInt(n, 10));
  const a = input[1].split(" ").map((n) => parseInt(n, 10));
  const result = challenge(a, d);

  return result.join(" ");
}

module.exports = main;
