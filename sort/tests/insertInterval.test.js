import insertInterval from '../insertInterval.js';

const a1 = [[1, 3], [6, 9]];
const b1 = [2, 5];
const e1 = [[1, 5], [6, 9]];

const a2 = [[1, 3], [5, 8], [10, 14], [20, 22], [24, 30]];
const b2 = [6, 10];
const e2 = [[1, 3], [5, 14], [20, 22], [24, 30]];

const a3 = [[1, 3], [5, 8], [11, 14], [20, 22]];
const b3 = [6, 10];
const e3 = [[1, 3], [5, 10], [11, 14], [20, 22]];

const a4 = [];
const b4 = [4, 6];
const e4 = [[4, 6]];

const a5 = [[1, 3], [4, 5], [11, 14], [20, 22], [24, 30]];
const b5 = [6, 10];
const e5 = [[1, 3], [4, 5], [6, 10], [11, 14], [20, 22], [24, 30]];

const a6 = [[1, 2], [5, 8], [10, 14], [20, 22], [24, 30]];
const b6 = [3, 10];
const e6 = [[1, 2], [3, 14], [20, 22], [24, 30]];

const a7 = [[5, 8], [20, 22], [24, 30]];
const b7 = [1, 4];
const e7 = [[1, 4], [5, 8], [20, 22], [24, 30]];

const a8 = [[5, 8], [20, 22], [24, 30]];
const b8 = [32, 40];
const e8 = [[5, 8], [20, 22], [24, 30], [32, 40]];

const a9 = [[2, 8], [10, 15], [20, 22], [24, 30]];
const b9 = [3, 10];
const e9 = [[2, 15], [20, 22], [24, 30]];

describe('insertInterval', () => {
  test('single merge', () => {
    expect(insertInterval(a1, b1)).toStrictEqual(e1);
  });
  test('dual merges', () => {
    expect(insertInterval(a2, b2)).toStrictEqual(e2);
  });
  test('single merge', () => {
    expect(insertInterval(a3, b3)).toStrictEqual(e3);
  });
  test('merge into empty intervals', () => {
    expect(insertInterval(a4, b4)).toStrictEqual(e4);
  });
  test('no merge', () => {
    expect(insertInterval(a5, b5)).toStrictEqual(e5);
  });
  test('merge into target', () => {
    expect(insertInterval(a6, b6)).toStrictEqual(e6);
  });
  test('merge target first', () => {
    expect(insertInterval(a7, b7)).toStrictEqual(e7);
  });
  test('merge target last', () => {
    expect(insertInterval(a8, b8)).toStrictEqual(e8);
  });
  test('merge target into first interval', () => {
    expect(insertInterval(a9, b9)).toStrictEqual(e9);
  });
});
