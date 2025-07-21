import Player from './Player.js';

function createBoardElement(
  player: ReturnType<typeof Player>,
  isEnemy = false,
  onClick?: (x: number, y: number) => void
) {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x.toString();
      cell.dataset.y = y.toString();

      // Show player's own ships
      if (!isEnemy && player.gameboard.board[y][x]) {
        cell.style.backgroundColor = 'gray';
      }

      // Show hits (red) and misses (white)
      const isHit = player.gameboard.hits.some(([hx, hy]) => hx === x && hy === y);
      const isMiss = player.gameboard.missedShots.some(([mx, my]) => mx === x && my === y);

      if (isHit) cell.style.backgroundColor = 'red';
      if (isMiss) cell.style.backgroundColor = 'white';

      // Add click listener to enemy board
      if (isEnemy && onClick) {
        cell.addEventListener('click', () => onClick(x, y));
      }

      board.appendChild(cell);
    }
  }

  return board;
}

export function renderBoards(
  player: ReturnType<typeof Player>,
  enemy: ReturnType<typeof Player>,
  onEnemyClick: (x: number, y: number) => void
) {
  const container = document.getElementById('game')!;
  container.innerHTML = '';
  container.appendChild(createBoardElement(player, false)); // Player board
  container.appendChild(createBoardElement(enemy, true, onEnemyClick)); // Enemy board
}
