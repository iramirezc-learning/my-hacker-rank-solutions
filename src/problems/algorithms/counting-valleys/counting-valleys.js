/**
 * Counting Valleys
 * @param {string} path
 * @returns {number}
 */
function countingValleys(path) {
  let valleys = 0;
  let altitude = 0;
  let goingDown = false;

  for (let step = 0; step < path.length; step++) {
    if (path.charAt(step) === "U") {
      altitude++;

      if (altitude === 0 && goingDown) {
        valleys++;
        goingDown = false;
      }
    }

    if (path.charAt(step) === "D") {
      altitude--;

      if (altitude < 0) {
        goingDown = true;
      }
    }
  }

  return valleys;
}

module.exports = countingValleys;
