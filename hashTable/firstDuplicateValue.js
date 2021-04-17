export default function firstDuplicateValue(array) {
  const set = new Set();

  for (let n of array) {
    if (set.has(n))
      return n;
    set.add(n);
  }
  return -1;
}
