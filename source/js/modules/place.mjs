import { suspects, evidence, scene} from './data.mjs';

const place = document.getElementById('place');
const nextBtn = document.getElementsByClassName('next')
const backBtn = document.getElementsByClassName('back')
const places = []
evidence.forEach(element => {
    places.push(element.foundAt)
})

console.log(places)
// nextBtn.addEventListener('click', () => {

// })