/**
 * Big Sorting (Quick Sort version)
 * @see {@link https://www.hackerrank.com/challenges/big-sorting/problem}
 */
function bigSorting(unsorted) {
  sort(unsorted, 0, unsorted.length - 1);

  return unsorted;
}

function less(a, b) {
  if (a.length === b.length) return BigInt(a) < BigInt(b);

  return a.length < b.length;
}

function exchange(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, lo, hi) {
  let i = lo;
  let j = hi + 1;

  const v = arr[lo];

  // eslint-disable-next-line
  while (true) {
    while (less(arr[++i], v)) {
      if (i === hi) {
        break;
      }
    }

    while (less(v, arr[--j])) {
      if (j === lo) {
        break;
      }
    }

    if (i >= j) {
      break;
    }

    exchange(arr, i, j);
  }

  exchange(arr, lo, j);

  return j;
}

// QuickSort FTW!
function sort(arr, lo, hi) {
  if (hi <= lo) return;

  const j = partition(arr, lo, hi);

  sort(arr, lo, j - 1);
  sort(arr, j + 1, hi);
}

module.exports = bigSorting;
