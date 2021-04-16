export default function arrayOfProducts(array) {
  const pre = new Array(array.length);
  const suc = new Array(array.length);
  const res = [];

  pre[0] = 1;
  suc[suc.length - 1] = 1;

  for (let i = 1; i < pre.length; i++) {
    pre[i] = pre[i - 1] * array[i - 1];
  }
  for (let i = suc.length - 2; i >= 0; i--) {
    suc[i] = suc[i + 1] * array[i + 1];
  }
  for (let i = 0; i < array.length; i++) {
    res[i] = pre[i] * suc[i];
  }
  return res;
}
