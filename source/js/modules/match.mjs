import { selectedPairs, required } from './data.mjs';

const addLink = document.getElementById('link-board-btn');
let matched = false;

addLink.addEventListener('click', () => {
    for (let i of selectedPairs) {
        console.log(i);
        console.log(required);
        matched = i.join(', ') === required.join(', ');
        console.log(i.join(''), '_______I', required.join(', '))
        if(matched) {
            alert('you won')
        }
    }
});
