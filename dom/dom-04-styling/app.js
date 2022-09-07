/*jshint esversion: 8 */

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);
const u1_complete = document.querySelector('u1');
const section = document.querySelector('section');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');


// section.style.backgroundColor = 'blue';
// section.className = '';


button1.addEventListener('click', () => {
  // if (section.className === 'red-bg visible'){
  //   section.className = 'red-bg invisible'; 
  // } else {
  //     section.className = 'red-bg visible';
  // }
  section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

button2.addEventListener('click', () => {
  section.classList.toggle('red-bg');
  section.classList.toggle('green-bg');
});