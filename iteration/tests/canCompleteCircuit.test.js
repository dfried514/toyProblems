import canCompleteCircuit from '../canCompleteCircuit.js';

const gas1 = [1,2,3,4,5];
const cost1 = [3,4,5,1,2];
const e1 = 3;

const gas2 = [2,3,4];
const cost2 = [3,4,3];
const e2 = -1;

const gas3 = [5,1,2,3,4];
const cost3 = [4,4,1,5,1];
const e3 = 4;

describe('canCompleteCircuit', () => {
  test('valid circuit', () => {
    expect(canCompleteCircuit(gas1, cost1)).toBe(e1);
  });
  test('invalid circuit', () => {
    expect(canCompleteCircuit(gas2, cost2)).toBe(e2);
  });
  test('multi possible starting indicies', () => {
    expect(canCompleteCircuit(gas3, cost3)).toBe(e3);
  });
});
