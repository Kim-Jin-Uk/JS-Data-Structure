export const floydWarshall = (graph) => {
  for (let mid = 0; mid < graph.length; mid++) {
    for (let start = 0; start < graph.length; start++) {
      for (let end = 0; end < graph.length; end++) {
        graph[start][end] = Math.min(
          graph[start][end],
          graph[start][mid] + graph[mid][end]
        );
      }
    }
  }
  return graph;
};
