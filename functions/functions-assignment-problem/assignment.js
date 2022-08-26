/*jshint esversion: 8 */

const sayHello = (myName) => {
  console.log('Hi ' + myName);
};

sayHello('Kaigh');

const sayWzup = (myName, myAge) => {
  console.log('Hi ' + myName + ' you are ' + myAge + ' years old.');
};

sayWzup('Kaigh', 32);

const sayHello2 = () => {
  console.log('Hi Jim');
};

sayHello2();

const sayHello3 = (myName) => {
  return('Hi ' + myName);
};

console.log(sayHello3('Kaigh'));