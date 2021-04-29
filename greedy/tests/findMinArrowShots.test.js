import findMinArrowShots from '../findMinArrowShots.js';

const r1 = [[10,16],[2,8],[1,6],[7,12]];
const e1 = 2;

const r2 = [[1,2],[3,4],[5,6],[7,8]];
const e2 = 4;

const r3 = [[1,2],[2,3],[3,4],[4,5]];
const e3 = 2;

const r4 = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
const e4 = 2;

const r5 = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]];
const e5 = 2;

const r6 = [[0,1]];
const e6 = 1;

const r7 = [];
const e7 = 0;

describe('findMinArrowShots', () => {
  test('findMinArrowShots', () => {
    expect(findMinArrowShots(r1)).toBe(e1);
  });
  test('findMinArrowShots', () => {
    expect(findMinArrowShots(r2)).toBe(e2);
  });
  test('findMinArrowShots', () => {
    expect(findMinArrowShots(r3)).toBe(e3);
  });
  test('findMinArrowShots', () => {
    expect(findMinArrowShots(r4)).toBe(e4);
  });
  test('findMinArrowShots', () => {
    expect(findMinArrowShots(r5)).toBe(e5);
  });
  test('one balloon', () => {
    expect(findMinArrowShots(r6)).toBe(e6);
  });
  test('zero balloons', () => {
    expect(findMinArrowShots(r7)).toBe(e7);
  });
});
