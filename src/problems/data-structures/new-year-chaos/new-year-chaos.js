/**
 * New Year Chaos
 * @param {Array<number>} arr
 * @returns {number|string}
 */
function minimumBribes(arr) {
  for (let i = 0; i < arr.length; i++) {
    let position = arr[i] - (i + 1);

    if (position > 2) {
      return "Too chaotic";
    }
  }

  let i = arr.length - 2; // one before last
  let brides = 0;

  while (i >= 0) {
    let j = i;

    while (j < arr.length && arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      brides++;
      j++;
    }

    i--;
  }

  return brides;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = minimumBribes;
