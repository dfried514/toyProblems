import arrayOfProducts from '../arrayOfProducts.js';

const r1 = [1,2,3,4,5];
const e1 = [120, 60, 40, 30, 24];

const r2 = [-2,3,-5,2];
const e2 = [-30,20,-12,30]

const r3 = [2,3,0,1];
const e3 = [0,0,6,0];

const r4 = [2,4];
const e4 = [4,2];

describe('arrayOfProducts', () => {
  test('array of products', () => {
    expect(arrayOfProducts(r1)).toStrictEqual(e1);
  });
  test('array of products', () => {
    expect(arrayOfProducts(r2)).toStrictEqual(e2);
  });
  test('array of products', () => {
    expect(arrayOfProducts(r3)).toStrictEqual(e3);
  });
  test('array of two elements', () => {
    expect(arrayOfProducts(r4)).toStrictEqual(e4);
  });
});
