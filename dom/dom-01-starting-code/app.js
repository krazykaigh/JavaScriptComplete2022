/*jshint esversion: 8 */

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title';
h1.style.color = 'white';
h1.style.backgroundColor='black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' [Last of Type!]';

const body =document.body;
body.querySelector;
//const listItemsElements = document.querySelectorAll('li');
const listItemsElements = document.getElementsByTagName('li');

for (const listItemEl of listItemsElements) {
  console.dir(listItemEl);
}