for (i = 0; i < 5; i++) {
  const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
  console.log(randomNumber);
  if (randomNumber > 0.7) {
    alert("randomNumber is greater than 0.7");
  }
}

var arry = [1, 2, 3, 4, 5];
for (i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}
for (i = arry.length; i >= 0; i--) {
  console.log(arry[i]);
}


const rndmNumber = Math.random();
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber);
console.log(rndmNumber);

if ((randomNumber > 0.7) && (rndmNumber > 0.7)) {
  alert("Both random numbers are greater than 0.7");
} else if ((randomNumber <= 0.2) || (rndmNumber <= 0.2)) {
  alert("At least one random number is less than 0.2");
}