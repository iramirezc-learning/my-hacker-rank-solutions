/**
 * Repeated String
 * @param {string} s
 * @param {number} n
 * @returns {number}
 */
function repeatedString(s, n) {
  const arrayS = s.split("");
  const len = arrayS.length;
  const asInS = arrayS.reduce((acc, char) => {
    return char === "a" ? acc + 1 : acc;
  }, 0);
  const remainder = n % len;
  let count = Math.floor(n / len) * asInS;

  for (let i = 0; i < remainder; i++) {
    if (arrayS[i] === "a") count++;
  }

  return count;
}

module.exports = repeatedString;
