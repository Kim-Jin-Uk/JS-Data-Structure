import { bfs } from "./search/breadth-first-search.js";
import { dfs } from "./search/depth-first-search.js";

const graph1 = {
  0: [1, 2, 3],
  1: [4],
  2: [5],
  3: [6],
  5: [7, 8],
  6: [9],
};
console.log(bfs(graph1, 0));
const graph2 = {
  0: [1, 2, 3],
  1: [4],
  2: [5],
  3: [6],
  5: [7, 8],
  6: [9],
};
console.log(dfs(graph2, 0));
