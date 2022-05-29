/**
 * A Very Big Sum
 * @param {number} n
 * @param {Array<number>} arr
 * @returns {number}
 */
function solve(n, arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

module.exports = solve;
