function sockMerchant(n, arr) {
  const keys = {};
  let pairs = 0;

  arr.forEach((sock) => {
    if (!keys[sock]) keys[sock] = 0;

    keys[sock]++;

    if (keys[sock] % 2 === 0) pairs++;
  });

  return pairs;
}

module.exports = sockMerchant;
