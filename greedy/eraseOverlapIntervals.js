export default function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let removals = 0;
  let prev = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[prev][1] > intervals[i][0]) {
      removals++;
      if (intervals[prev][1] > intervals[i][1])
        prev = i;
    } else
      prev = i;
  }
  return removals;
}
