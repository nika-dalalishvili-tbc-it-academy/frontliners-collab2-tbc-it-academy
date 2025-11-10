import { suspects, evidence, scene} from './data.mjs';

const place = document.getElementById('place');
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const places = []
evidence.forEach(element => {
    places.push(element.foundAt)
})

console.log(places)
// nextBtn.addEventListener('click', () => {

// })