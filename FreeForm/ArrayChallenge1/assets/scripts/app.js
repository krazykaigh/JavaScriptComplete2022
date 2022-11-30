/*jshint esversion: 8*/
const list = [91, 2, 17, 51, 54, 39, 34, 61, 34, 91];
let idx1 = 0;
let idx2 = 1;
let idx3 = null;
if (list[idx2] > list[idx1]) {
idx1 = 1;
idx2 = 0;
}
for (let i = 2; i < list.length; i++) {
if (list[i] >= list[idx1]) {
idx3 = idx2;
idx2 = idx1;
idx1 = i;
}
else if (list[i] >= list[idx2]) {
idx3 = idx2;
idx2 = i;
}
else if (idx3 === null || list[i] >= list[idx3]) {
idx3 = i;
}
}

console.log(idx1 +":"+ list[idx1]+"\n"+ idx2 +":"+ list[idx2]+"\n"+ idx3 +":"+  list[idx3]);
console.log(idx3);