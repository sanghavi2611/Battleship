import Gameboard from './Gameboard.js';

export default function Player(name: string, isComputer = false) {
  const gameboard = Gameboard();
  const previousAttacks = new Set<string>();

  function attack(opponent: ReturnType<typeof Gameboard>, x: number, y: number) {
    opponent.receiveAttack(x, y);
  }

  function randomAttack(opponent: ReturnType<typeof Gameboard>) {
    let x: number, y: number;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (previousAttacks.has(`${x},${y}`));
    previousAttacks.add(`${x},${y}`);
    attack(opponent, x, y);
  }

  return { name, gameboard, attack, randomAttack };
}

