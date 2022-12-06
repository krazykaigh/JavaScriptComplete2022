/*jshint esversion: 8 */
// const ids = new Set(['Hi','From', 'Set']);
// ids.add(2);
// ids.delete('Hi');
// console.log(ids.has(2));
// console.log(ids);
// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
// console.log(personData);
// console.log(personData.get(person1));

// personData.set(person2,[{date: 'two weeks ago', price: 15}]);

// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

let person = {name: 'Max'};//,{name: 'Charlie'},{name: 'Frank'}];
const persons = new Set();

persons.add(person);
persons.add({name: 'Charlie'});
persons.add({name: 'Frank'});

// iterate over WeakSet - cannot use for-of loop
for (const person of persons) { 
  console.log(person);
}
//person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person,"Extra Info");
console.log(personData);

//person = null;
