function sumDigits(n) {
  return n.split("").reduce((sum, d) => {
    return sum + parseInt(d, 10);
  }, 0);
}

function superDigit(n) {
  if (n.length === 1) return n;

  return superDigit(String(sumDigits(n)));
}

function digitSum(n, k) {
  const p = sumDigits(n) * k;

  return superDigit(String(p));
}

module.exports = digitSum;
