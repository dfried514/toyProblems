function grayCode(n) {
  const res = [];

  const recurse = (n, num) => {
    console.log(n, num);
    if (n == 0) {
      res.push(num[0]);
      return;
    }
    recurse(n - 1, num);
    num[0] = num[0] ^ (1 << (n - 1));
    console.log('num', num, 'n', n);
    recurse(n - 1, num);
  }
  recurse(n, [0]);
  return res;
}
const n = 3;
console.log(grayCode(n));
