import { Node } from "./node.js";

export class Stack {
  constructor() {
    this.top = null;
  }
  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this.top = this.top.next;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.top.data;
  }
  print() {
    let printText = "";
    if (this.isEmpty()) return undefined;
    let curr = this.top;
    printText += "TOP ";
    while (curr.next) {
      printText += `${curr.data} -> `;
      curr = curr.next;
    }
    printText += `${curr.data}`;
    console.log(printText);
  }
}
