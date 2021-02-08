/**
 * Recursive Digit Sum
 * @see {@link https://www.hackerrank.com/challenges/recursive-digit-sum/problem}
 */
function digitSum(n, k) {
  const p = sumDigits(n) * k;

  return superDigit(String(p));
}

function sumDigits(n) {
  return n.split("").reduce((sum, d) => {
    return sum + parseInt(d, 10);
  }, 0);
}

function superDigit(n) {
  if (n.length === 1) return n;

  return superDigit(String(sumDigits(n)));
}

function toString(result) {
  return String(result);
}

function main(inputAsString) {
  const input = inputAsString.trim().split(" ");
  const n = input[0];
  const k = parseInt(input[1], 10);

  return toString(digitSum(n, k));
}

module.exports = main;
