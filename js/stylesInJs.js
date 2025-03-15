const sections = document.querySelectorAll('section');
for(let i of sections){
   i.style.border='2px solid blue'
   i.style.marginBottom='5px';
   i.style.borderRadius='10px';
   i.style.padding='10px';
   i.style.backgroundColor='lightGreen';
}
const places_container = document.getElementById('places-container');
places_container.style.backgroundColor = 'lightGray';
places_container.classList.add('text-center')
places_container.classList.remove('large-text')


