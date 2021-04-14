import isMonotonic from '../isMonotonic.js';

const array1 = [2, 2, 2, 3, 4, 4];
const expected1 = true;

const array2 = [2, 2, 2, 3, 2, 4];
const array3 = [2, 2, 2, 1, -1, -3];
const array4 = [];

describe('isMonotonic', () => {
  test('is monotonic', () => {
    expect(isMonotonic(array1)).toBe(expected1);
  });
  test('is monotonic', () => {
    expect(isMonotonic(array2)).toBeFalsy();
  });
  test('is monotonic', () => {
    expect(isMonotonic(array3)).toBeTruthy();
  });
  test('is monotonic', () => {
    expect(isMonotonic(array4)).toBeTruthy();
  });
});
