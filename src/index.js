module.exports = function reverse (n) {
    n = Math.abs(n);
    let arr = String(n).split('').reverse().join('');
    return +arr;
  };
