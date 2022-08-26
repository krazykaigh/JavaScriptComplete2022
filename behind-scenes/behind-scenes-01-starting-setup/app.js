/*jshint esversion: 8 */

function getName() {
  const userName = prompt('What is your name?');
  return userName;
}

function greet() {
  const userName = getName();
  console.log(`Hello ${userName}`);
}

greet();