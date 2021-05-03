import removeDuplicateLetters from '../removeDuplicateLetters.js';

const r1 = "bcabc";
const e1 = "abc";

const r2 = "cbacdcbc";
const e2 = "acdb";

const r3 = "cdadabcc";
const e3 = "adbc";

const r4 = "bbcaac";
const e4 = "bac";

const r5 = "abacb";
const e5 = "abc";

describe('removeDuplicateLetters', () => {
  test('removeDuplicateLetters', () => {
    expect(removeDuplicateLetters(r1)).toStrictEqual(e1);
  });
  test('removeDuplicateLetters', () => {
    expect(removeDuplicateLetters(r2)).toStrictEqual(e2);
  });
  test('removeDuplicateLetters', () => {
    expect(removeDuplicateLetters(r3)).toStrictEqual(e3);
  });
  test('removeDuplicateLetters', () => {
    expect(removeDuplicateLetters(r4)).toStrictEqual(e4);
  });
  test('removeDuplicateLetters', () => {
    expect(removeDuplicateLetters(r5)).toStrictEqual(e5);
  });
});
