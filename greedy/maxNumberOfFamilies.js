export default function maxNumberOfFamilies(n, reservedSeats) {
  reservedSeats.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

  const maskDouble = parseInt('0111111110', 2);
  const maskMiddle = parseInt('0001111000', 2);
  const maskLeft = parseInt('0111100000', 2);
  const maskRight = parseInt('0000011110', 2);
  let row = 1;
  let idx = 0;
  let res = 0;

  while (idx < reservedSeats.length) {
    let curRow = reservedSeats[idx][0];

    res += ((curRow - row) * 2);
    row = curRow;
    let rowChart = 0;

    while (idx < reservedSeats.length && reservedSeats[idx][0] == curRow) {
      rowChart |= 2 ** (reservedSeats[idx++][1] - 1);
    }
    if (!(rowChart & maskDouble))
      res += 2;
    else if (!(rowChart & maskMiddle)
      || !(rowChart & maskLeft)
      || !(rowChart & maskRight))
      res++;
    row++;
  }
  return res += ((n - row + 1) * 2);
}
