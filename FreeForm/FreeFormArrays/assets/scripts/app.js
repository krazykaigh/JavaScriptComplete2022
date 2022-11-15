/*jshint esversion: 8*/

// Typical way to create an array
/* const numbers = [1, 2, 3];
console.log(numbers); */

/* const moreNumbers = new Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers); */

/* const moreNumbers = Array.from('Hello There!');
console.log(moreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems); */

//Converts the listItems into an array
/* const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5, 4, 2.1]];

for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
} */

const hobbies = ['Sports', 'Cooking'];
// Add item to the end of the array
hobbies.push('Reading');
// Add item at the beginning of the array
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
/* hobbies.shift();
hobbies[1] = 'Coding';
hobbies[5] = 'Reading'; */
console.log(hobbies);
console.log(poppedValue, hobbies);

// Splice method
hobbies.splice(0, 0, 'Good Food');
console.log(hobbies);

// Slice method
const removedElements = hobbies.slice(0, 1);  
console.log(removedElements);
