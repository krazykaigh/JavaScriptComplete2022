var pets =  ['cats', 'dogs', 'birds'];
var longPets = pets.filter(pet => pet.length > 4);
console.log(longPets);

// Infinite loop
// let i = 0; 
// for (; ; ){
//   if (i < 5){
//     console.log(i);
//     i++;
//   }
// }

// subtract all numbers in array
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((total, num) => total - num);
console.log(sum);

const honda = {
  model: "civic",
  year: 2018,
  color: "red"
};

//function to log the model of the honda
honda.log = function() {
  console.log(this.model);
};

const numbers1 = [175, 50, 25];

console.log(numbers1.reduce(addFunc));
function addFunc(total, num) {
  return total + num;
}

