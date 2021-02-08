/**
 * Big Sorting (JS Sort version)
 * @see {@link https://www.hackerrank.com/challenges/big-sorting/problem}
 */
function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length === b.length) {
      const aN = BigInt(a);
      const bN = BigInt(b);

      return aN < bN ? -1 : aN > bN ? 1 : 0;
    }

    return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
  });
}

module.exports = bigSorting;
