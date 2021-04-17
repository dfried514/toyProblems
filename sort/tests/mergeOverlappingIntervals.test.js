import mergeOverlappingIntervals from '../mergeOverlappingIntervals.js';

const r1 = [[8, 12], [11, 13], [1, 20], [4, 9]];
const e1 = [[1, 20]];

const r2 = [[22, 24], [21, 22], [12, 19], [1, 18], [4, 9]];
const e2 = [[1, 19], [21, 24]];

const r3 = [[3, 6], [1, 2], [12, 16], [6, 10]];
const e3 = [[1, 2], [3, 10], [12, 16]];

const r4 = [[4, 6], [9, 13], [1, 3]];
const e4 = [[1, 3], [4, 6], [9, 13]];

describe('firstDuplicateValue', () => {
  test('multiple merges', () => {
    expect(mergeOverlappingIntervals(r1)).toStrictEqual(e1);
  });
  test('dual merges', () => {
    expect(mergeOverlappingIntervals(r2)).toStrictEqual(e2);
  });
  test('single merge', () => {
    expect(mergeOverlappingIntervals(r3)).toStrictEqual(e3);
  });
  test('no merges', () => {
    expect(mergeOverlappingIntervals(r3)).toStrictEqual(e3);
  });
});
