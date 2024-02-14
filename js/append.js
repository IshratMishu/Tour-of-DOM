
//..............Section add by innerText...........//
//1. where to add
const placesList = document.getElementById('places-list');

//2. what to be added
const li = document.createElement('li');
li.innerText = 'Santm';

//3. add the child
placesList.appendChild(li);

//another try
//1. where to add
const mainContent = document.getElementById('main-content');

//2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'rice';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'curry';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'noodle';
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section);


//...............section add by innerHTML..............//
//set inner html directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My dress Section </h1>
<ul>
    <li>T shirt</li>
    <li>Sweet Shirt</li>
    <li>Polo shirt</li>
</ul>
`
mainContent.appendChild(sectionDress);