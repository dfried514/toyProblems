export default function insertInterval(intervals, newInterval) {
  const res = [];
  let idx = 0;

  while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
    res.push([...intervals[idx++]]);
  }
  if (idx < intervals.length && intervals[idx][0] <= newInterval[1]) {
    const cur = [
      Math.min(intervals[idx][0], newInterval[0]),
      Math.max(intervals[idx++][1], newInterval[1])
    ];
    while (idx < intervals.length && intervals[idx][0] <= cur[1]) {
      cur[1] = Math.max(cur[1], intervals[idx++][1]);
    }
    res.push([...cur]);
  } else {
    res.push([...newInterval]);
  }
  return [...res, ...intervals.slice(idx)];
};
