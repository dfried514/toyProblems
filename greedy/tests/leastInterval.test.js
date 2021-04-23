import leastInterval from '../leastInterval.js';

const tasks1 = ["A","A","A","B","B","B"];
const n1 = 2;
const e1 = 8;

const tasks2 = ["A","A","A","B","B","B"];
const n2 = 0;
const e2 = 6;

const tasks3 = ["A","A","A","A","A","A","B","C","D","E","F","G"];
const n3 = 2;
const e3 = 16;

const tasks4 = ["B", "B", "E", "E", "E", "E", "G", "I", "I", "I"];
const n4 = 4;
const e4 = 16;

describe('leastInterval', () => {
  test('interval', () => {
    expect(leastInterval(tasks1, n1)).toBe(e1);
  });
  test('no idle', () => {
    expect(leastInterval(tasks2, n2)).toBe(e2);
  });
  test('interval', () => {
    expect(leastInterval(tasks3, n3)).toBe(e3);
  });
  test('random letters', () => {
    expect(leastInterval(tasks4, n4)).toBe(e4);
  });
});
