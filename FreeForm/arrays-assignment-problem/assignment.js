/*jshint esversion: 8*/



let nums = [212, 4, 45, 78, 12, 34, 56];
// filter out all numbers that are greater 47
let nums2 = nums.filter(z => z > 47);


console.log(nums2);

// map every number to an object which holds the number on some property
let nums1 = nums.map(function (z) { 
    return {number: z};
});

console.log(nums1);

let reduct = nums.reduce(function(prevVal, currVal) {
  return prevVal * currVal;
});

console.log(reduct);

// find the maximum value of the array
function findMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > curMax) {
      curMax = nums[i];
    }
    if (nums[i] < curMin) {
      curMin = nums[i];
    }
  }
  return [curMin, curMax];
}
// Deconstruct the array
const [min, max] =findMax(...nums);

console.log('Min and Max in array = ' + [min, max]);


// find the maximum and minimum value of the array

let minim = nums.reduce(function(x, y ) {

  if (y<x) return y;
  return x;

});

console.log(minim);

let maxim = nums.reduce(function(x, y ) {

  if (y>x)  return y;
  return x;
});

console.log(maxim);

// create a list where no duplicates can be added



let nums3 = [212, 4, 45, 78, 12, 34, 56, 45, 78, 12, 34, 56];
let nums4 = nums3.filter(function (z, i) {
    return nums3.indexOf(z) === i;
});

const mySet = new Set(nums3);
console.log(mySet);