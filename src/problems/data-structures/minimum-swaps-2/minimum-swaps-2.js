/**
 * Minimum Swaps 2
 * @param {Array<number>} arr
 * @returns {number}
 */
function minimumSwaps2(arr) {
  const lo = 0;
  const hi = arr.length - 1;
  let totalSwaps = 0;

  let i = lo;
  let j = hi;

  while (i < hi) {
    if (arr[i] === i + 1) {
      i++;
      continue;
    }

    while (j > i && arr[j] !== i + 1) {
      j--;
    }

    swap(arr, i, j);
    totalSwaps++;

    i = i + 1;
    j = hi;
  }

  return totalSwaps;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = minimumSwaps2;
