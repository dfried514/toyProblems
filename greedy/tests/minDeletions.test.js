import minDeletions from '../minDeletions.js';

const r1 = "aab";
const e1 = 0;

const r2 = "aaabbbcc";
const e2 = 2;

const r3 = "ceabaacb";
const e3 = 2;

describe('minDeletions', () => {
  test('minDeletions', () => {
    expect(minDeletions(r1)).toBe(e1);
  });
  test('minDeletions', () => {
    expect(minDeletions(r2)).toBe(e2);
  });
  test('minDeletions', () => {
    expect(minDeletions(r3)).toBe(e3);
  });
});
