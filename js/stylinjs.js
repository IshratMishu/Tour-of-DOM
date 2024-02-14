const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginTop = '5px';
    section.style.borderRadius = '10px';
    section.style.padding = '15px';
    section.style.backgroundColor = 'yellow';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'blue';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');