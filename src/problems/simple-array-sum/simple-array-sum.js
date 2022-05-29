/**
 * Simple Array Sum
 * @param {number} n
 * @param {Array<number>} arr
 * @returns {number}
 */
function simpleArraySum(n, arr) {
  let total = 0;
  let i = arr.length;

  while (i > 0) {
    total += arr[--i];
  }

  return total;
}

module.exports = simpleArraySum;
