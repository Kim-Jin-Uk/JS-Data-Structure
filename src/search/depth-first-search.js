export const dfs = (graph, start) => {
  const visited = [];
  let stack = [start];
  while (stack.length) {
    const node = stack.pop();
    if (visited.includes(node)) continue;
    visited.push(node);
    if (graph[node]) stack = stack.concat(graph[node]);
  }
  return visited;
};
