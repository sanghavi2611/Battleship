import Ship from './Ship.js';

export default function Gameboard() {
  const board: (ReturnType<typeof Ship> | null)[][] = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  const missedShots: [number, number][] = [];
  const hits: [number, number][] = [];
  const ships: ReturnType<typeof Ship>[] = [];

  function placeShip(ship: ReturnType<typeof Ship>, x: number, y: number, horizontal = true) {
    for (let i = 0; i < ship.length; i++) {
      if (horizontal) board[y][x + i] = ship;
      else board[y + i][x] = ship;
    }
    ships.push(ship);
  }

  function receiveAttack(x: number, y: number): boolean {
    const target = board[y][x];
    if (target) {
      target.hit();
      hits.push([x, y]);
      return true;
    } else {
      missedShots.push([x, y]);
      return false;
    }
  }

  function allShipsSunk() {
    return ships.every(ship => ship.isSunk());
  }

  return {
    board,
    placeShip,
    receiveAttack,
    allShipsSunk,
    missedShots,
    hits,
  };
}
