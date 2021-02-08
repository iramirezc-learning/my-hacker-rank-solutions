/**
 * Insertion Sort - Part 1
 * @see {@link https://www.hackerrank.com/challenges/insertionsort1/problem}
 */
function insertionSort1(n, arr) {
  const last = arr[n - 1];
  const result = [];

  for (let i = n - 1; i >= 0; i--) {
    if (last < arr[i - 1]) {
      arr[i] = arr[i - 1];
      result.push(arr.join(" "));
    } else {
      arr[i] = last;
      result.push(arr.join(" "));
      break;
    }
  }

  return result;
}

function toString(result) {
  return result.join("\n");
}

function main(inputAsString) {
  const input = inputAsString.trim().split("\n");
  const n = parseInt(input[0], 10);
  const arr = input[1].split(" ").map((n) => parseInt(n, 10));

  return toString(insertionSort1(n, arr));
}

module.exports = main;
