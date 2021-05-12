import longestDiverseString from '../longestDiverseString.js';

const a1 = 1, b1 = 1, c1 = 7;
const e1 = "ccaccbcc";

const a2 = 2, b2 = 2, c2 = 1;
const e2 = "ababc";

const a3 = 7, b3 = 1, c3 = 0;
const e3 = "aabaa";

const a4 = 0, b4 = 0, c4 = 0;
const e4 = "";

const a5 = 10, b5 = 0, c5 = 0;
const e5 = "aa";

describe('longesetDiverseString', () => {
  test('longestDiverseString', () => {
    expect(longestDiverseString(a1, b1, c1)).toStrictEqual(e1);
  });
  test('longestDiverseString', () => {
    expect(longestDiverseString(a2, b2, c2)).toStrictEqual(e2);
  });
  test('longestDiverseString', () => {
    expect(longestDiverseString(a3, b3, c3)).toStrictEqual(e3);
  });
  test('longestDiverseString', () => {
    expect(longestDiverseString(a4, b4, c4)).toStrictEqual(e4);
  });
  test('longestDiverseString', () => {
    expect(longestDiverseString(a5, b5, c5)).toStrictEqual(e5);
  });
});
