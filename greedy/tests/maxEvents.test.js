import maxEvents from '../maxEvents.js';

const r1 = [[1,2],[2,3],[3,4],[1,2]];
const e1 = 4;

const r2 = [[1,4],[4,4],[2,2],[3,4],[1,1]];
const e2 = 4;

const r3 = [[1,100000]];
const e3 = 1;

const r4 = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]];
const e4 = 7;

const r5 = [[1,10],[2,2],[2,2],[2,2],[2,2]];
const e5 = 2;

describe('maxEvents', () => {
  test('maxEvents', () => {
    expect(maxEvents(r1)).toBe(e1);
  });
  test('maxEvents', () => {
    expect(maxEvents(r2)).toBe(e2);
  });
  test('maxEvents', () => {
    expect(maxEvents(r3)).toBe(e3);
  });
  test('maxEvents', () => {
    expect(maxEvents(r4)).toBe(e4);
  });
  test('maxEvents', () => {
    expect(maxEvents(r5)).toBe(e5);
  });
});
