export default function Ship(length: number) {
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    return hits >= length;
  }

  return { length, hit, isSunk };
}