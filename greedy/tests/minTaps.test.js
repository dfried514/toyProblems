import minTaps from '../minTaps.js';

const n1 = 5, r1 = [3,4,1,1,0,0];
const e1 = 1;

const n2 = 3, r2 = [0,0,0,0];
const e2 = -1;

const n3 = 7, r3 = [1,2,1,0,2,1,0,1];
const e3 = 3;

const n4 = 8, r4 = [4,0,0,0,0,0,0,0,4];
const e4 = 2;

const n5 = 8, r5 = [4,0,0,0,4,0,0,0,4];
const e5 = 1;

const n6 = 25, r6 = [3,0,1,5,4,1,4,2,4,4,3,3,3,0,3,2,5,1,5,5,2,3,1,0,2,4];
const e6 = 4;

const n7 = 35, r7 = [1,0,4,0,4,1,4,3,1,1,1,2,1,4,0,3,0,3,0,3,0,5,3,0,0,1,2,1,2,4,3,0,1,0,5,2];
const e7 = 6;

describe('minTaps', () => {
  test('minTaps', () => {
    expect(minTaps(n1, r1)).toBe(e1);
  });
  test('minTaps', () => {
    expect(minTaps(n2, r2)).toBe(e2);
  });
  test('minTaps', () => {
    expect(minTaps(n3, r3)).toBe(e3);
  });
  test('minTaps', () => {
    expect(minTaps(n4, r4)).toBe(e4);
  });
  test('minTaps', () => {
    expect(minTaps(n5, r5)).toBe(e5);
  });
  test('tricky', () => {
    expect(minTaps(n6, r6)).toBe(e6);
  });
  test('tricky', () => {
    expect(minTaps(n7, r7)).toBe(e7);
  });
});
