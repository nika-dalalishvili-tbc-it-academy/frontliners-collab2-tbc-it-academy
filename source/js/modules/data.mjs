async function getData() {
    const url = './source/data/data.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}


const data = await getData();

const suspects = data.suspects;
const evidence = data.evidence;
const scene = data.scenes; 

const selectedPairs = []

export { suspects, evidence, scene, selectedPairs };