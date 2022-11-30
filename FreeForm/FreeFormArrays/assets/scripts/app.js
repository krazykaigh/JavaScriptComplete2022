/*jshint esversion: 8 */

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

/* const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);
// Add item to the end of the array
hobbies.push('Reading');
// Add item at the beginning of the array
hobbies.unshift('Coding');
console.log(hobbies);

const poppedValue = hobbies.pop(); */
/* hobbies.shift();
hobbies[1] = 'Coding';
hobbies[5] = 'Reading'; */
/* console.log(hobbies);
console.log(poppedValue, hobbies); */

// Splice method
/* hobbies.splice(1, 0, 'Good Food');
console.log(hobbies); */

// Slice method
/* const removedElements = hobbies.splice(-2, 1);  
console.log(removedElements);
console.log(hobbies); */
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(2);
/* const storedResults = testResults.concat([3.99, 2]);
testResults.push(5.91);

console.log(storedResults, testResults);

console.log(testResults.indexOf(1.5)); */
// create array of names
// Get index of object with specific value in array
const needle = 3; // needle
const haystack = [{ id: 1 }, { id: 2 }, { id: 3 }]; // haystack
const index = haystack.findIndex((item) => item.id === needle);
console.log("The value of Needle as found at index: " + index); // 2

const personalData = [
  { name: "Maxine" },
  { name: "Manuel" },
  { name: "Beatrice" },
  { name: "Lionel" },
];
// The following statement will return -1 indicating that the value is not found
console.log(
  "Manuel was found at index: " + personalData.indexOf({ name: "Manuel"})
);

const manuel = personalData.find((person, idx, persons) => {
  return person.name === "Manuel";
});
console.log("This is the Manuel object" + JSON.stringify(manuel));
manuel.name = "Anna";
console.log("Just changed Manuel to Anna");
console.log(JSON.stringify(manuel)+ '\nAnd here\'s the array' +JSON.stringify(personalData));

const beatriceIndex = personalData.findIndex((person, idx, persons) => {
  return person.name === "Beatrice";
});

console.log(beatriceIndex);

console.log('Does this array include a name equal to Beatrice: '+ personalData.includes('Beatrice'));

console.log("Here is what's inside the array: " + JSON.stringify(personalData));

console.log('New Stuff'); // New Stuff
/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));

prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});
console.log(JSON.stringify(taxAdjustedPrices)); */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});
console.log(JSON.stringify(taxAdjPrices)); */

