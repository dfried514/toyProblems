export default function minCost(s, cost) {
  let totalCost = 0;
  let idx = 1;

  while (idx < s.length) {
    if (s[idx] == s[idx - 1]) {
      let max = Math.max(cost[idx], cost[idx - 1]);
      let curCost = Math.min(cost[idx], cost[idx - 1]);

      idx++;

      while (idx < s.length && s[idx] == s[idx - 1]) {
        if (cost[idx] > max) {
          curCost += max;
          max = cost[idx];
        } else {
          curCost += cost[idx];
        }
        idx++;
      }
      totalCost += curCost;
    }
    idx++;
  }
  return totalCost;
}
