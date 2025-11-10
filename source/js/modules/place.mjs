import { suspects, evidence, scene } from './data.mjs';

const place = document.getElementById('place');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');
const fountAt = [];
let counter = 0;
evidence.forEach((element) => {
    fountAt.push(element.foundAt);
});
const places = ['Lobby', ...fountAt];

nextBtn.addEventListener('click', () => {
    if (places.length - 1 === counter) {
        nextBtn.active = false;
    } else {
        place.textContent = places[counter];
        counter = counter + 1;
        backBtn.disabled = false;
    }
});

backBtn.addEventListener('click', () => {
    if (counter === 0) {
        place.textContent = places[0];
        backBtn.disabled = true;
    } else {
        place.textContent = places[counter];
        counter--;
    }
});
