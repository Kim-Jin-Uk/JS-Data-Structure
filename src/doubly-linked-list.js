export class DoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
export class DoublyLinkedList {
  constructor() {
    this.root = new DoublyNode("root");
  }

  append(newElement) {
    const newNode = new DoublyNode(newElement);
    let current = this.root;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
  }

  insert(newData, item) {
    const newNode = new DoublyNode(newData);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    newNode.prev = current;
    current.next.prev = newNode;
  }

  remove(item) {
    const preNode = this.findPrev(item);
    preNode.next = preNode.next.next;
    preNode.next.prev = preNode;
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
