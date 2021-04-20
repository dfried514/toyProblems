export default function insertInterval(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  const res = [];
  let idx = 0;

  if (intervals[idx][0] <= newInterval[0])
    res.push([...intervals[idx++]]);
  else
    res.push([...newInterval]);

  for (; idx < intervals.length; idx++) {
    if (newInterval[0] <= res[res.length - 1][1]) {
      res[res.length - 1][0] = Math.min(res[res.length - 1][0], newInterval[0]);
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], newInterval[1]);
    }
    if (intervals[idx][0] <= res[res.length - 1][1]) {
      res[res.length - 1][0] = Math.min(res[res.length - 1][0], intervals[idx][0]);
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[idx][1]);
    } else {
      res.push([...intervals[idx]]);
    }
  }
  return res;
};
