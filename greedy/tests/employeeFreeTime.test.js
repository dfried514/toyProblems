import employeeFreeTime from '../employeeFreeTime.js';

const r1 = [[[1,2],[5,6]],[[1,3]],[[4,10]]];
const e1 = [[3,4]];

const r2 =  [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]];
const e2 = [[5,6],[7,9]];

const r3 = [[[0,1],[12,19],[42,54],[78,80],[89,93]],[[5,10],[30,62],[69,73],[80,83],[90,100]],[[13,21],[23,29],[42,43],[86,91],[97,100]],[[0,11],[24,25],[30,58],[76,93],[94,97]],[[1,3],[46,50],[56,58],[71,73],[77,99]]];
const e3 = [[11,12],[21,23],[29,30],[62,69],[73,76]];

describe('employeeFreeTime', () => {
  test('employeeFreeTime', () => {
    expect(employeeFreeTime(r1)).toStrictEqual(e1);
  });
  test('employeeFreeTime', () => {
    expect(employeeFreeTime(r2)).toStrictEqual(e2);
  });
  test('employeeFreeTime', () => {
    expect(employeeFreeTime(r3)).toStrictEqual(e3);
  });
});
