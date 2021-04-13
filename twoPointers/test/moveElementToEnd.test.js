import moveElementToEnd from '../moveElementToEnd.js';

const array1 = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove1 = 2;
const expected1 = [1, 3, 4, 2, 2, 2, 2, 2];

const array2 = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12];
const toMove2 = 5;
const expected2 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5];

test('moves selected element to end of array', () => {
  expect(moveElementToEnd(array1, toMove1)).toEqual(expected1);
});
test('moves selected element to end of array', () => {
  expect(moveElementToEnd(array2, toMove2)).toEqual(expected2);
});
