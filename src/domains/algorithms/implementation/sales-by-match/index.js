/**
 * Name: Sales by Match
 * Difficulty: Easy
 * Domain: Algorithms > Implementation
 * @see {@link https://www.hackerrank.com/challenges/sock-merchant/problem}
 */
function sockMerchant(n, arr) {
  const keys = {};
  let pairs = 0;

  arr.forEach((sock) => {
    if (!keys[sock]) keys[sock] = 0;

    keys[sock]++;

    if (keys[sock] % 2 === 0) pairs++;
  });

  return pairs;
}

function toString(result) {
  return String(result);
}

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input[0], 10);
  const arr = input[1].split(" ").map((n) => parseInt(n, 10));

  return toString(sockMerchant(n, arr));
}

module.exports = main;
