function grayCode(n) {
  const res = [];

  const recurse = (n, num) => {
    if (n == 0) {
      res.push(num[0]);
      return;
    }
    recurse(n - 1, num);
    num[0] = num[0] ^ (1 << (n - 1));
    recurse(n - 1, num);
  }
  recurse(n, [0]);
  return res;
  //yes!
}
