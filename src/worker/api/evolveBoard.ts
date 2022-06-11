import { getBoard, makeEmptyBoard, setBoard } from '.';
import { getLivingNeighbors } from './cell';

export const evolveBoard = (): void => {
	const currentBoard = getBoard();

	const newBoard = makeEmptyBoard(
		currentBoard.length,
		currentBoard[0].length
	);

	for (let x = 0; x < currentBoard.length; ++x) {
		const currentRow = currentBoard[x];

		for (let y = 0; y < currentRow.length; ++y) {
			const cell = { x, y, alive: currentRow[y] };

			const livingNeighbors = getLivingNeighbors(currentBoard, cell);

			if (cell.alive) {
				if (livingNeighbors === 2 || livingNeighbors === 3) {
					newBoard[x][y] = true;
				}
			} else if (livingNeighbors === 3) {
				newBoard[x][y] = true;
			}
		}
	}

	setBoard(newBoard);
};
