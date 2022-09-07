const h1 = document.getElementById('main-title');

h1.textContent = 'This new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const ul = document.querySelector('ul');

ul.children[1].innerHTML = 'New Item';

const ulLastEl = ul.lastElementChild
ulLastEl.textContent=ulLastEl.textContent + "... And another";
//ul.childNodes[0].textContent='textContent'; Text Node

ul.backgroundColor='blue'; 
