export default function removeDuplicateLetters(s) {
  let min = 0;
  const cnt = [];

  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i)] = cnt[s.charCodeAt(i)] + 1 || 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) < s.charAt(min))
      min = i;
    if (--cnt[s.charCodeAt(i)] == 0)
      break;
  }
  return s.charAt(min) == ''
    ? ''
    : s.charAt(min) + removeDuplicateLetters(s.substring(min + 1).replace(new RegExp(s.charAt(min), 'g'), ''));
}
