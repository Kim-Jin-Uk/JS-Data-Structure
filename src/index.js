import { bubble } from "./sort/bubble.js";
import { insertion } from "./sort/insertion.js";
import { selection } from "./sort/selection.js";
import { quick } from "./sort/quick.js";

const t1 = new Date();
const data1 = [1, 5, 4, 3, 6, 7, 9, 2, 0, 8];
for (let i = 0; i < 1000000; i++) bubble(data1);
console.log("bubble => ", new Date() - t1);

const t2 = new Date();
const data2 = [1, 5, 4, 3, 6, 7, 9, 2, 0, 8];
for (let i = 0; i < 1000000; i++) insertion(data2);
console.log("insertion => ", new Date() - t2);

const t3 = new Date();
const data3 = [1, 5, 4, 3, 6, 7, 9, 2, 0, 8];
for (let i = 0; i < 1000000; i++) selection(data3);
console.log("selection => ", new Date() - t3);

const t4 = new Date();
const data4 = [1, 5, 4, 3, 6, 7, 9, 2, 0, 8];
for (let i = 0; i < 1000000; i++) quick(data4);
console.log("quick => ", new Date() - t4);
