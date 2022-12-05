/*jshint esversion: 8 */
// const ids = new Set(['Hi','From', 'Set']);
// ids.add(2);
// ids.delete('Hi');
// console.log(ids.has(2));
// console.log(ids);
// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
console.log(personData);
console.log(personData.get(person1));