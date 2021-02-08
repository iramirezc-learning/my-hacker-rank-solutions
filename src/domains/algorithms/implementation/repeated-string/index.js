/**
 * Repeated String
 * @see {@link https://www.hackerrank.com/challenges/repeated-string/problem}
 */
function repeatedString(s, n) {
  const arrayS = s.split("");
  const len = arrayS.length;
  const asInS = arrayS.reduce((acc, char) => {
    return char === "a" ? acc + 1 : acc;
  }, 0);
  const remainder = n % len;
  let count = Math.floor(n / len) * asInS;

  for (let i = 0; i < remainder; i++) {
    if (arrayS[i] === "a") count++;
  }

  return count;
}

function toString(result) {
  return String(result);
}

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const s = input[0].trim();
  const n = parseInt(input[1].trim(), 10);

  return toString(repeatedString(s, n));
}

module.exports = main;
