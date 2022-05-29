/**
 * Array Manipulation O(m^n)
 * @deprecated Since the function times out.
 * @param {number} n
 * @param {Array<Array<number>>} queries
 * @returns {number}
 */
function arrayManipulation(n, queries) {
  const hash = {};

  for (let i = 1; i <= n; i++) {
    hash[i] = BigInt(0);
  }

  let max = BigInt(0);

  for (let i = 0; i < queries.length; i++) {
    const [lo, hi, k] = queries[i];

    for (let j = lo; j <= hi; j++) {
      hash[j] = hash[j] + BigInt(k);

      if (hash[j] > max) {
        max = hash[j];
      }
    }
  }

  return max;
}

module.exports = arrayManipulation;
