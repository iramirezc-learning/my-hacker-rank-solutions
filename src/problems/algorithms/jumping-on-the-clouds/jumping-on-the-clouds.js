/**
 * Jumping on the Clouds
 * @param {Array<number>} arr
 * @returns {number}
 */
function jumping(clouds) {
  let jumps = 0;

  for (let i = 0; i < clouds.length; i++) {
    if (clouds[i + 2] === 0) {
      i++;
      jumps++;
    } else if (clouds[i + 1] === 0) {
      jumps++;
    }
  }

  return jumps;
}

module.exports = jumping;
