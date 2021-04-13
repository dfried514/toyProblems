export default function moveElementToEnd(array, toMove) {
  let r = 0, l;

  while (r < array.length && array[r] !== toMove) {
    r++;
  }
  if (r == array.length)
    return array;
  l = r;
  r++;

  while (r < array.length) {
    while (r < array.length && array[r] == toMove) {
      r++;
    }
    if (r == array.length)
      return array;
    [array[l], array[r]] = [array[r], array[l]];
    l++;
    r++;
  }
  return array;
}
