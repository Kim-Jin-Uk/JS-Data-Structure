import { Node } from "./node.js";

export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.front.data;
  }

  print() {
    let printText = "";
    if (this.isEmpty()) return undefined;
    let curr = this.front;
    printText += "FRONT ";
    while (curr != this.rear) {
      printText += `${curr.data} -> `;
      curr = curr.next;
    }
    printText += `${this.rear.data}`;
    console.log(printText);
  }
}
