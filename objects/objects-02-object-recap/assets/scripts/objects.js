const movieList= document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'gray';

movieList.style.display = 'block';

const person = {
  name: 'Max',
  'last name': 'Mustermann',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
};

// person.greet();
console.log (person['last name']);
console.log (person[1.5]);

console.log(person);