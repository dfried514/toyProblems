import spiralTraverse from '../spiralTraverse.js';

const array1 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];
const expected1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const array2 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];
const expected2 = [1,2,3,4,5,6,7,8,9];

const array3 = [];
const expected3 = [];

const array4 = [[1]];
const expected4 = [1];

const array5 = [[3], [2]];
const expected5 = [3,2];

const array6 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const expected6 = [1,2,3,4,8,12,11,10,9,5,6,7];

const array7 = [[7],[9],[6]];
const expected7 = [7,9,6];

describe('spiralTraverse', () => {
  test('spiral traverse', () => {
    expect(spiralTraverse(array1)).toStrictEqual(expected1);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array2)).toStrictEqual(expected2);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array3)).toStrictEqual(expected3);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array4)).toStrictEqual(expected4);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array5)).toStrictEqual(expected5);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array6)).toStrictEqual(expected6);
  });
  test('spiral traverse', () => {
    expect(spiralTraverse(array7)).toStrictEqual(expected7);
  });
});
