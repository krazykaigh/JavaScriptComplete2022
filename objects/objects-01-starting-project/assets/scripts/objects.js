/*jshint esversion: 8 */
const person = {
  name: 'Kaigh',
  age: 57,
  hobbies: ['music', 'movies', 'reading'],
  greet: function() {
    alert('Hi there!');
  }
}; // object literal notation
// Add a property to an object
person.isAdmin = true;

 delete person.age;
// person.age = undefined;
// person.greet();
console.log (person.isAdmin);
console.log (person.name);
console.log (person);

