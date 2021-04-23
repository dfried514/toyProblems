export default function leastInterval(tasks, n) {
  const hash = {};

  for (const t of tasks) {
    hash[t] = hash[t] + 1 || 1;
  }
  const sortedTasks = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  let maxTask = hash[sortedTasks[0]];
  let remainingTasks = tasks.length - hash[sortedTasks[0]];
  let idleTime = (hash[sortedTasks[0]] - 1) * n;
  let totalTime = hash[sortedTasks[0]];

  while (idleTime > 0) {
    remainingTasks--;
    idleTime--;
    totalTime++;
  }
  return totalTime + idleTime + remainingTasks;
}

