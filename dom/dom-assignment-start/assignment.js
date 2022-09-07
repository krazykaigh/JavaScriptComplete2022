/*jshint esversion: 8 */

const h1 = document.getElementById('main-title');

//headerh1.textContent = 'Some new title';
h1.style.color = 'blue';
h1.style.backgroundColor='black';


const headerh1 = document.querySelector('h1');
console.dir(headerh1);
headerh1.style.backgroundColor='#fa923f';

const inHead = document.querySelector('title');
console.dir(inHead);
inHead.innerText = "Assignment - Solved"

headerh1.textContent = "Assignment - Solved!";

const theHead = document.getElementsByTagName('title');
console.dir(document.getElementsByTagName('title'));
console.dir(theHead);
theHead[0].textContent="some new text";