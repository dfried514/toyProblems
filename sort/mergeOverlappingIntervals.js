export default function mergeOverlappingIntervals(array) {
  const res = [];

  array.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  for (let i = 0; i < array.length; i++) {
    const curInterval = [...array[i]];

    while (i < array.length - 1 && curInterval[1] >= array[i + 1][0]) {
        curInterval[1] = Math.max(curInterval[1], array[1 + i++][1]);
    }
    res.push(curInterval);
  }
  return res;
}
