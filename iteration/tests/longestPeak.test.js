import longestPeak from '../longestPeak.js';

const r1 = [2,2,2,3,4,2];
const e1 = 4;

const r2 = [2,2,2,4,1,1];
const e2 = 3;

const r3 = [2,3,3,1];
const e3 = 0;

const r4 = [3,3,2,1];
const e4 = 0;

const r5 = [2,2,2,3,4,2,2,3,5,6,7,1,2,-3];
const e5 = 6;

describe('longestPeak', () => {
  test('longest peak normal', () => {
    expect(longestPeak(r1)).toStrictEqual(e1);
  });
  test('small peak', () => {
    expect(longestPeak(r2)).toStrictEqual(e2);
  });
  test('flat peak', () => {
    expect(longestPeak(r3)).toStrictEqual(e3);
  });
  test('no peak', () => {
    expect(longestPeak(r4)).toStrictEqual(e4);
  });
  test('two peaks', () => {
    expect(longestPeak(r5)).toStrictEqual(e5);
  });
});
