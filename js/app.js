// Basis JavaScript bestand voor de gamepagina

function updateGameMessage(text) {
  const message = document.getElementById('gameMessage');
  if (message) {
    message.textContent = text;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const scoreButton = document.getElementById('scoreButton');
  const scoreValue = document.getElementById('scoreValue');
  const nameForm = document.getElementById('nameForm');
  const levelSelect = document.getElementById('levelSelect');
  const soundCheckbox = document.getElementById('soundCheckbox');
  const colorInput = document.getElementById('colorInput');
  const speedRange = document.getElementById('speedRange');

  let score = 0;

  if (scoreButton && scoreValue) {
    scoreButton.addEventListener('click', () => {
      score += 10;
      scoreValue.textContent = score;
      updateGameMessage(`Je hebt nu ${score} punten.`);
    });
  }

  if (nameForm) {
    nameForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const playerName = document.getElementById('playerName').value.trim() || 'speler';
      updateGameMessage(`Hallo ${playerName}, je speelt op ${levelSelect.value} met snelheid ${speedRange.value}.`);
    });
  }

  const inputs = [levelSelect, soundCheckbox, colorInput, speedRange];
  inputs.forEach((input) => {
    if (input) {
      input.addEventListener('input', () => {
        updateGameMessage(`Level: ${levelSelect.value}, geluid: ${soundCheckbox.checked ? 'aan' : 'uit'}, kleur: ${colorInput.value}, snelheid: ${speedRange.value}.`);
      });
    }
  });
});
