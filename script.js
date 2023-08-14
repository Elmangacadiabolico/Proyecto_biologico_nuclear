const initialLipids = 'TAC';
const varyingLipids = ['ACT', 'ATT', 'ATC'];
const lipids = ['A', 'T', 'C', 'G'];
const oppositeLipids = {
  'A': 'T',
  'T': 'U',
  'C': 'G',
  'G': 'C'
};

const outputDiv = document.getElementById('output');
const oppositeOutputDiv = document.getElementById('oppositeOutput');
const showLipidsButton = document.getElementById('showLipidsButton');

showLipidsButton.addEventListener('click', () => {
  let lipidSequence = initialLipids;

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * lipids.length);
    lipidSequence += lipids[randomIndex];
  }

  const randomVaryingIndex = Math.floor(Math.random() * varyingLipids.length);
  lipidSequence += varyingLipids[randomVaryingIndex];

  outputDiv.textContent = `Secuencia de lípidos: ${lipidSequence}`;

  // Generar la secuencia de lípidos opuestos
  let oppositeLipidSequence = '';
  for (let i = 0; i < lipidSequence.length; i++) {
    const currentLipid = lipidSequence[i];
    const oppositeLipid = oppositeLipids[currentLipid];
    oppositeLipidSequence += oppositeLipid;
  }
  
  oppositeOutputDiv.textContent = `Secuencia de lípidos opuestos: ${oppositeLipidSequence}`;
});