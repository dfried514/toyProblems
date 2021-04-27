import eraseOverlapIntervals from '../eraseOverlapIntervals.js';

const r1 = [[1,2],[2,3],[3,4],[1,3]];
const e1 = 1;

const r2 = [[1,2],[1,2],[1,2]];
const e2 = 2;

const r3 = [[1,2],[2,3]];
const e3 = 0;

const r4 = [[0,2],[1,3],[2,4],[3,5],[4,6]];
const e4 = 2;

describe('eraseOverlapIntervals', () => {
  test('single', () => {
    expect(eraseOverlapIntervals(r1)).toBe(e1);
  });
  test('eraseOverlapIntervals', () => {
    expect(eraseOverlapIntervals(r2)).toBe(e2);
  });
  test('eraseOverlapIntervals', () => {
    expect(eraseOverlapIntervals(r3)).toBe(e3);
  });
  test('eraseOverlapIntervals', () => {
    expect(eraseOverlapIntervals(r4)).toBe(e4);
  });
});
