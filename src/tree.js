export class Node {
  constructor(data) {
    this.value = data;
    this.childs = [];
  }
  push(data) {
    this.childs.push(new Node(data));
  }
}
export class Tree {
  constructor(nodes) {
    this.root = nodes;
  }
  // traverse
  printPreorder() {
    const printNode = [];
    function preorder(node) {
      printNode.push(node.value);
      for (const c of node.childs) {
        preorder(c);
      }
    }
    preorder(this.root);
    console.log(printNode);
  }
  printPostorder() {
    const printNode = [];
    function postorder(node) {
      for (const c of node.childs) {
        postorder(c);
      }
      printNode.push(node.value);
    }
    postorder(this.root);
    console.log(printNode);
  }
}
const node = new Node(1);
node.push(2);
for (let i = 3; i < 7; i++) {
  node.childs[0].push(i);
}
node.push(7);
node.push(8);
node.push(9);
node.childs[0].childs[0].push(10);
const tree = new Tree(node);
tree.printPreorder();
tree.printPostorder();
