import Gameboard from './Gameboard.js';

export type PlayerType = {
  name: string;
  gameboard: ReturnType<typeof Gameboard>;
  attack: (opponent: ReturnType<typeof Gameboard>, x: number, y: number) => void;
  randomAttack: (opponent: ReturnType<typeof Gameboard>) => void;
};
