export default function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);
  let shots = 0;
  let cur = 0;
  let idx = 1;

  while (idx <= points.length) {
    shots++;

    while (idx < points.length && points[idx][0] <= points[cur][1]) {
      idx++;
    }
    cur = idx;
    idx++;
  }
  return shots;
}
