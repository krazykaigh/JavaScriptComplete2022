/*jshint esversion: 8*/
const arr = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

let first = {};
let second = {};
let third = {};

arr.forEach((number, index) => {
  // if duplicate value return
  if (number === first.number || number === second.number || number === third.number) return;
    
  //check against first, second and third, move values down as needed
  if (!first.number || number > first.number) {
    third = second; //edit
    second = first;
    first = {number, index};
  } else if (!second.number || number > second.number) {
      third = second;
      second = {number, index};
  } else if (!third.number || number > third.number) {
      third = {number, index};
  }
});

console.log(first.index +":"+ first.number+"\n"+ second.index +":"+ second.number+"\n"+ third.index +":"+  third.number);
