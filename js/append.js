const placesList = document.getElementById('places-list');
let list = document.createElement('li');
list.innerText = 'pahartoli bon';
placesList.appendChild(list);


const mainContainer = document.getElementById('main-container');
const section2 = document.createElement('section');
const heading = document.createElement('h1');
heading.innerText = 'another new section';
section2.appendChild(heading)


const ulList = document.createElement('ul')

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ulList.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ulList.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'kacchi';
ulList.appendChild(li3);

section2.appendChild(ulList);
mainContainer.appendChild(section2)



