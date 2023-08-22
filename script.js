const initialLipids = "TAC";
const varyingLipids = ["ACT", "ATT", "ATC"];
const lipids = ["A", "T", "C", "G"];
const oppositeLipids = {
    A: "U",
    T: "A",
    C: "G",
    G: "C",
};
const traduccionDOGMA = {};

const outputDiv = document.getElementById("output");
const oppositeOutputDiv = document.getElementById("oppositeOutput");
const showLipidsButton = document.getElementById("showLipidsButton");
const traducciona = document.getElementById("traduccion");

showLipidsButton.addEventListener("click", () => {
    let lipidSequence = initialLipids;

    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * lipids.length);
        lipidSequence += lipids[randomIndex];
    }

    const randomVaryingIndex = Math.floor(Math.random() * varyingLipids.length);
    lipidSequence += varyingLipids[randomVaryingIndex];

    outputDiv.textContent = `Secuencia de ADN: ${lipidSequence}`;

    // Generar la secuencia de lípidos opuestos
    let oppositeLipidSequence = "";
    for (let i = 0; i < lipidSequence.length; i++) {
        const currentLipid = lipidSequence[i];
        const oppositeLipid = oppositeLipids[currentLipid];
        oppositeLipidSequence += oppositeLipid;
    }

    oppositeOutputDiv.textContent = `Transcripción: ${oppositeLipidSequence}`;

    let traduccionxd = "";
    for (let i = 0; i < lipidSequence.length; i++) {
        const currentLipid = lipidSequence[i];
        const oppositeLipid = oppositeLipids[currentLipid];
        traduccionxd += oppositeLipid;
    }

    traducciona.textContent = `Traducción: ${traduccionxd}`;
});