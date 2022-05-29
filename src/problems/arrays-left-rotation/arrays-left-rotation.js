/**
 * Arrays: Left Rotation
 * @param {Array<number>} arr
 * @param {number} d
 * @returns {Array<number>}
 */
function leftRotation(arr, d) {
  const len = arr.length;
  const rotations = d % len;

  if (rotations === 0) return arr;

  const rotated = [];

  for (let i = 0; i < len; i++) {
    rotated[i] = arr[(i + rotations) % len];
  }

  return rotated;
}

module.exports = leftRotation;
