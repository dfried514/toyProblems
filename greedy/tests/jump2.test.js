import jump2 from '../jump2.js';

const r1 = [2, 3, 1, 1, 4];
const e1 = 2;

const r2 = [2, 3, 0, 1, 4];
const e2 = 2;

const r3 = [0];
const e3 = 0;

const r4 = [1];
const e4 = 0;

const r5 = [1,2,1,1,1];
const e5 = 3;

const r6 = [10,9,8,7,6,5,4,3,2,1,1,0];
const e6 = 2;

const r7 = [4,1,1,3,1,1,1];
const e7 = 2;

describe('jump2', () => {
  test('jump', () => {
    expect(jump2(r1)).toBe(e1);
  });
  test('jump', () => {
    expect(jump2(r2)).toBe(e2);
  });
  test('zero jump', () => {
    expect(jump2(r3)).toBe(e3);
  });
  test('zero jump', () => {
    expect(jump2(r4)).toBe(e4);
  });
  test('equal jump values', () => {
    expect(jump2(r5)).toBe(e5);
  });
  test('tricky jumps', () => {
    expect(jump2(r6)).toBe(e6);
  });
  test('tricky jumps', () => {
    expect(jump2(r7)).toBe(e7);
  });
});
