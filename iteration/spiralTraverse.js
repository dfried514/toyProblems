export default function spiralTraverse(array) {
  if (array.length === 0) return [];
  const res = [];
  let cL = 0, cR = array[0].length - 1;
  let rU = 0, rD = array.length - 1;

  while (cL <= cR && rU <= rD) {
    for (let c = cL; c <= cR; c++) {
      res.push(array[rU][c]);
    }
    for (let r = rU + 1; r <= rD; r++) {
      res.push(array[r][cR]);
    }
    if (cL < cR && rU < rD) {
      for (let c = cR - 1; c > cL; c--) {
        res.push(array[rD][c]);
      }
      for (let r = rD; r > rU; r--) {
        res.push(array[r][cL]);
      }
    }
    cL++;
    cR--;
    rU++;
    rD--;
  }
  return res;
}
