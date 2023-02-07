export const dijkstra = (graph, n, k) => {
  const map = new Map();
  const dp = new Array(n + 1).fill(Infinity);
  const visited = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[k] = 0;

  for (let i of graph) {
    if (map.has(i[0])) map.get(i[[0]]).push([i[1], i[2]]);
    else map.set(i[0], [[i[1], i[2]]]);
  }
  // js에는 기본적으로 우선순위 큐를 제공하지 않기 때문에 일반적인 큐로 구현
  const que = [[k, 0]];

  while (que.length > 0) {
    const [prev, prevTime] = que.shift();
    if (visited[prev] > 0) continue;
    visited[prev] = 1;
    if (!map.has(prev)) continue;
    for (let [next, nextTime] of map.get(prev)) {
      dp[next] = Math.min(dp[next], nextTime + dp[prev]);
      if (visited[next] > 0) continue;
      que.push([next, dp[next]]);
    }
    que.sort((a, b) => a[1] - b[1]);
  }
  const maxTime = Math.max(...dp);
  return maxTime === Infinity ? -1 : maxTime;
};
