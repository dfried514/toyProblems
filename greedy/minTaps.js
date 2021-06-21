export default function minTaps(n, ranges) {
  // create an array of intervals, first index is left-most idx
  // and second index is right most idx
  // sort by left index non-dec
  // iterate over intervals
  //  while curInteral left idx <= curLeft
  //    obtain max right idx
  //  next curLeft idx = maxRight + 1
  //  if curMax is not found return -1
  //  inc jumps
  //  if curMax is at end of range, return jumps
  const intervals = [];
  let jumps = 0;
  let idx = 0;
  let curLeft = 0;

  ranges.forEach((r, i) => {
    if (r > 0)
      intervals.push([Math.max(0, i - r), Math.min(ranges.length - 1, i + r)]);
  });
  if (!intervals.length) return -1;
  intervals.sort((a, b) => a[0] - b[0]);

  let curInterval = intervals[idx];

  while (idx < intervals.length) {
    let curMaxRight = -Infinity;

    while (curInterval && curInterval[0] <= curLeft) {
      curMaxRight = Math.max(curMaxRight, curInterval[1]);
      curInterval = intervals[++idx];
    }
    if (curMaxRight == -Infinity) return -1;
    jumps++;
    if (curMaxRight == ranges.length - 1) return jumps;
    curLeft = curMaxRight;
  }
}
