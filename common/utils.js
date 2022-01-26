function showAlert(message){
  const gameArea = document.querySelector('.game-area');

  const alertMessage = `
  <div class="game-alert">
    <div class="game-alert-message">${message}</div>
  </div>
  `;

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}