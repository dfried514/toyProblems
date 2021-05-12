export default function longestDiverseString(a, b, c) {
  let res = '';
  const hash = {
    'a' : a,
    'b' : b,
    'c' : c
  };
  const nextChar = () => {
    const sortedChars = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    if (hash[sortedChars[0]] == 0)
      return null;
    if (res.length >= 2
      && res[res.length - 1] == sortedChars[0]
      && res[res.length - 2] == sortedChars[0]) {
      if (hash[sortedChars[1]] == 0)
        return null;
      else {
        hash[sortedChars[1]]--;
        return sortedChars[1];
      }
    }
    hash[sortedChars[0]]--;
    return sortedChars[0];
  }
  let char = nextChar();

  while (char) {
    res += char;
    char = nextChar();
  }
  return res;
}
