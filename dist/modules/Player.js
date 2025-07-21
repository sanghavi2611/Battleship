import Gameboard from './Gameboard.js';
export default function Player(name, isComputer = false) {
    const gameboard = Gameboard();
    const previousAttacks = new Set();
    function attack(opponent, x, y) {
        opponent.receiveAttack(x, y);
    }
    function randomAttack(opponent) {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (previousAttacks.has(`${x},${y}`));
        previousAttacks.add(`${x},${y}`);
        attack(opponent, x, y);
    }
    return { name, gameboard, attack, randomAttack };
}
