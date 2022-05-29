/**
 * Compare the Triplets
 * @param {Array<number>} a
 * @param {Array<number>} b
 * @returns {Array<number>}
 */
function solve(a, b) {
  let alice = 0;
  let bob = 0;

  a.forEach(function (_, i) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  });

  return [alice, bob];
}

module.exports = solve;
