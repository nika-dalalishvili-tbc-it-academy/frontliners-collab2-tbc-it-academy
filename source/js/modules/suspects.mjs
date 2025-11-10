import { suspects } from './data.mjs';

const suspectsOpt = document.getElementById('suspects');
console.log(suspectsOpt);

console.log(suspects);

suspects.forEach((i) => {
    suspectsOpt.innerHTML += `<option value="${i.id}">${i.name}</option>`;
});

suspectsOpt.addEventListener('click', () => {
    console.log(suspectsOpt.value);
})