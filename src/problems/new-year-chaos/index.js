const minimumBribes = require("./new-year-chaos");

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const t = parseInt(input.shift(), 10);

  const results = [];

  for (let i = 0; i < t; i++) {
    input.shift(); // ignore line with n
    const q = input
      .shift()
      .trim()
      .split(" ")
      .map((n) => parseInt(n, 10));

    results.push(minimumBribes(q));
  }

  return results.join("\n");
}

module.exports = main;
