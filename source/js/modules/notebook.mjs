import { suspects, evidence } from "./data.mjs";
console.log(evidence);

const evidenceCount = evidence.length;

const spanEvidenceCount = document.getElementById("evidence-counter");

spanEvidenceCount.textContent = `0 - ${evidenceCount}`;

