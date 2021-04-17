import containsDuplicate from '../containsDuplicate.js';

const r1 = [1,2,3,4,5];
const e1 = false;

const r2 = [-2,2,-2,4];
const e2 = true;

describe('containsDuplicate', () => {
  test('no duplicate', () => {
    expect(containsDuplicate(r1)).toBeFalsy();
  });
  test('duplicate', () => {
    expect(containsDuplicate(r2)).toBeTruthy();
  });
});
