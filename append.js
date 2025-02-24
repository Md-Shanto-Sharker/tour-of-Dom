const appends = document.getElementById("Places-list");
const li = document.createElement("li");
li.innerText = "pahartoli bon";
appends.appendChild(li);

const newSection = document.getElementById("main-content");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "this is a new section";
newSection.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyany";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "kacchi";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "tahari";
ul.appendChild(li3);

newSection.appendChild(ul);

// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>another new section</h1>
<ul>
    <li>Jalali set</li>
    <li>Shafayet</li>
    <li>bonobash</li>
 </ul>
`;
newSection.appendChild(sectionDress)
