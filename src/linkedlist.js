import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.root = new Node("root");
  }

  append(newElement) {
    const newNode = new Node(newElement);
    let current = this.root;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insert(newData, item) {
    const newNode = new Node(newData);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item) {
    const preNode = this.findPrev(item);
    preNode.next = preNode.next.next;
  }

  find(item) {
    let currNode = this.root;
    while (currNode.data !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findPrev(item) {
    let currNode = this.root;
    while (currNode.next != null && currNode.next.data !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  print() {
    const array = [];
    let currNode = this.root;
    while (currNode.next !== null) {
      array.push(currNode.next.data);
      currNode = currNode.next;
    }
    return console.log(array);
  }
}
