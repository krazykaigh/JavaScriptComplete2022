/*jshint esversion: 8 */
const ids = new Set(['Hi','From', 'Set']);
ids.add(2);
ids.delete('Hi');
console.log(ids.has(2));
console.log(ids);
for (const entry of ids.entries()) {
  console.log(entry[0]);
}