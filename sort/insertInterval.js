export default function insertInterval(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  const res = [];
  let idx = 0;

  while (idx < intervals.length && intervals[idx][0] <= newInterval[1]) {
    const cur = [...intervals[idx]];

    while (intervals[idx][0] <= newInterval[1] && intervals[idx][0] >= newInterval[0]) {

    }
  }
};
