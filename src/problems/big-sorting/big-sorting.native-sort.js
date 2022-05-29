/**
 * Big Sort using JavaScript native implementation.
 * @param {Array<string>} unsorted
 * @returns {Array<string>}
 */
function jsSort(unsorted) {
  return unsorted.sort((a, b) => {
    // compare if both string have the same length
    if (a.length === b.length) {
      const aN = BigInt(a);
      const bN = BigInt(b);

      // then compare them as big numbers
      return aN < bN ? -1 : aN > bN ? 1 : 0;
    }

    // if lengths are different then one number is bigger
    // than the other if the length is greater.
    return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
  });
}

module.exports = jsSort;
