export default function leastInterval(tasks, n) {
  const hash = {};
  for (const t of tasks) {
    hash[t] = hash[t] + 1 || 1;
  }
  const sortedTasks = Object.values(hash).sort((a, b) => b - a);
  let totalTime = (sortedTasks[0] - 1) * (n + 1);
  let numMaxFreq = 1;

  for (let i = 1; i < sortedTasks.length; i++) {
    if (sortedTasks[i] == sortedTasks[0])
      numMaxFreq++;
    else
      break;
  }
  return Math.max(tasks.length, totalTime + numMaxFreq);
}
