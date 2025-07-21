export default function Gameboard() {
    const board = Array(10)
        .fill(null)
        .map(() => Array(10).fill(null));
    const missedShots = [];
    const hits = [];
    const ships = [];
    function placeShip(ship, x, y, horizontal = true) {
        for (let i = 0; i < ship.length; i++) {
            if (horizontal)
                board[y][x + i] = ship;
            else
                board[y + i][x] = ship;
        }
        ships.push(ship);
    }
    function receiveAttack(x, y) {
        const target = board[y][x];
        if (target) {
            target.hit();
            hits.push([x, y]);
            return true;
        }
        else {
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
