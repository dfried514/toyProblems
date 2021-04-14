export default function longestPeak(array) {
  let curPeak = 0, maxPeak = 0, idx = 1;

  while (idx < array.length) {
    while (idx < array.length && array[idx] <= array[idx - 1]) {
      idx++;
    }
    if (idx == array.length)
      return maxPeak;
    curPeak = 2;
    idx++;

    while (idx < array.length && array[idx] > array[idx - 1]) {
      curPeak++;
      idx++;
    }
    if (idx == array.length)
      return maxPeak;
    if (array[idx] == array[idx - 1])
      continue;

    while (idx < array.length && array[idx] < array[idx - 1]) {
      curPeak++;
      idx++;
    }
    maxPeak = Math.max(maxPeak, curPeak);
  }
  return maxPeak;
}
