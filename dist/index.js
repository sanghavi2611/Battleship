import Player from './modules/Player.js';
import Ship from './modules/Ship.js';
import { renderBoards } from './modules/DOM.js';
const human = Player('Human');
const cpu = Player('CPU', true);
human.gameboard.placeShip(Ship(3), 0, 0);
cpu.gameboard.placeShip(Ship(3), 0, 0);
function handlePlayerAttack(x, y) {
    human.attack(cpu.gameboard, x, y);
    if (cpu.gameboard.allShipsSunk()) {
        alert('You win!');
        return;
    }
    cpu.randomAttack(human.gameboard);
    if (human.gameboard.allShipsSunk()) {
        alert('CPU wins!');
    }
    renderBoards(human, cpu, handlePlayerAttack);
}
renderBoards(human, cpu, handlePlayerAttack);
