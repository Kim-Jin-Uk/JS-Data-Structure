export const bfs = (graph, start) => {
  const visited = [];
  let queue = [start];
  while (queue.length) {
    const node = queue.shift();
    if (visited.includes(node)) continue;
    visited.push(node);
    if (graph[node]) queue = queue.concat(graph[node]);
  }
  return visited;
};
