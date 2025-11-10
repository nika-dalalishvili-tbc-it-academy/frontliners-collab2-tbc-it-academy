import { suspects, evidence, selectedPairs } from "./data.mjs";
console.log(evidence, "___evidence");



const evidenceCount = evidence.length;

const spanEvidenceCount = document.getElementById("evidence-counter");

spanEvidenceCount.textContent = `${evidenceCount} - ${evidenceCount}`;

const optionsList = document.querySelector(".options__list");
const selectEvidenceElement1 = document.getElementById("link-board-select-1");
const selectEvidenceElement2 = document.getElementById("link-board-select-2");

// set dinamyc data here
const selectedEvidence = evidence;

selectedEvidence.forEach(ev => {
    optionsList.innerHTML += `
        <li class="list-item">${ev.label}</li>
    `
    selectEvidenceElement1.innerHTML += `
        <option value="${ev.label}">${ev.label}</option>
    `
    selectEvidenceElement2.innerHTML += `
        <option value="${ev.label}">${ev.label}</option>
    `
})

const linkBoardBtn = document.getElementById("link-board-btn");
const linkBoardInput = document.getElementById("link-board-input");

const linkBoard = document.querySelector(".options__linkboard");

linkBoardBtn.addEventListener("click", () => {
    const inputText = linkBoardInput.value;
    console.log(selectEvidenceElement1.value)
    console.log(selectEvidenceElement2.value)
    const selectEl1Evidence = selectEvidenceElement1.value;
    const selectEl2Evidence = selectEvidenceElement2.value;
    if(selectEl1Evidence === selectEl2Evidence) {
        alert("cannot linked");
        return;
    }
    
    const parentDiv = document.createElement("div");
    parentDiv.innerHTML = `
        <p/>${selectEl1Evidence} <-> ${selectEl2Evidence}<p>
        <p>${inputText}</p>
    `
    const firstEvidence = selectedEvidence.find(ev => ev.label === selectEl1Evidence)
    const secondEvidence = selectedEvidence.find(ev => ev.label === selectEl2Evidence)
    console.log(firstEvidence, secondEvidence);

    selectedPairs.push([firstEvidence.id, secondEvidence.id])
    
    console.log(selectedPairs)
    
    parentDiv.classList.add("linked-evidence");
    linkBoard.append(parentDiv);
    
})

