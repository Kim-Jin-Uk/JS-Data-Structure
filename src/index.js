import { Stack } from "./stack.js";
import { Queue } from "./queue.js";
import { HashTable } from "./hashtable.js";

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(3);
stack.push(5);
stack.push(1);
stack.push(7);
stack.pop();
stack.print();

const queue = new Queue();
queue.push(2);
queue.push(4);
queue.push(3);
queue.push(5);
queue.push(1);
queue.push(7);
queue.pop();
queue.print();

const hashtable = new HashTable();
hashtable.setItem("Fname", "JinUk");
hashtable.setItem("Lname", "Kim");
hashtable.setItem("age", 27);
hashtable.setItem("birth(yyyy-mm-dd)", "1996-12-27");

hashtable.setItem("height(cm)", "185");
hashtable.setItem("weight(kg)", "90");
hashtable.setItem("level(1-4)", 3);
hashtable.setItem("gender(M/F)", "M");
console.log(hashtable.table);
