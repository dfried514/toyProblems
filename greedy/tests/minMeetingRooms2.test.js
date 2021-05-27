import minMeetingRooms from '../minMeetingRooms2.js';

const r1 = [[0,30],[5,10],[15,20]];
const e1 = 2;

const r2 =  [[7,10],[2,4]];
const e2 = 1;

const r3 = [[9,10],[4,9],[4,17]];
const e3 = 2;

const r4 = [[2,11],[6,16],[11,16]];
const e4 = 2;

const r5 = [[9,16],[6,16],[1,9],[3,15]];
const e5 = 3;

describe('minMeetingRooms', () => {
  test('minMeetingRooms', () => {
    expect(minMeetingRooms(r1)).toBe(e1);
  });
  test('minMeetingRooms', () => {
    expect(minMeetingRooms(r2)).toBe(e2);
  });
  test('tricky', () => {
    expect(minMeetingRooms(r3)).toBe(e3);
  });
  test('tricky', () => {
    expect(minMeetingRooms(r4)).toBe(e4);
  });
  test('tricky', () => {
    expect(minMeetingRooms(r5)).toBe(e5);
  });
});
