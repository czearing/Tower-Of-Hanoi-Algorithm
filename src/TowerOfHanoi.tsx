/**
 * The total number of moves it takes to solve the puzzle.
 */
export let numberOfTurns = 0;

/**
 * Moves the discs on the Hanoi tower to the ending row.
 *
 * @param length
 * @param initialRow
 * @param endingRow
 * @param temporaryRow
 */
const moveToDiscsToRow = (
  length: number,
  initialRow: number[],
  endingRow: number[],
  temporaryRow: number[]
) => {
  if (length > 0) {
    moveToDiscsToRow(length - 1, initialRow, temporaryRow, endingRow);
    endingRow.push(initialRow.pop());
    moveToDiscsToRow(length - 1, temporaryRow, endingRow, initialRow);
    numberOfTurns++;
  }
  return endingRow;
};

/**
 * Solves the tower of Hanoi puzzle.
 *
 * @param pillars
 */
export const TowerOfHanoi = (pillars: number[][]) => {
  return moveToDiscsToRow(
    pillars[0].length,
    pillars[0],
    pillars[1],
    pillars[2]
  );
};
