import { Board, Cell } from '.';

export const getLivingNeighbors = (board: Board, cell: Cell): number => {
	const xMaxIndex = board.length - 1;
	const yMaxIndex = board[0].length - 1;

	const { x, y } = cell;

	let left = false;
	let right = false;
	let top = false;
	let bot = false;

	let topLeft = false;
	let topRight = false;

	let botLeft = false;
	let botRight = false;

	if (x === 0) {
		// on the far left side
		left = board[xMaxIndex][y];

		if (y === yMaxIndex) {
			// at the top left
			topLeft = board[xMaxIndex][0];
		} else {
			topLeft = board[xMaxIndex][y + 1];
		}

		if (y === 0) {
			// at the bottom left
			botLeft = board[xMaxIndex][yMaxIndex];
		} else {
			botLeft = board[xMaxIndex][y - 1];
		}
	} else {
		left = board[x - 1][y];

		if (y === yMaxIndex) {
			topLeft = board[x - 1][0];
		} else {
			topLeft = board[x - 1][y + 1];
		}

		if (y === 0) {
			botLeft = board[x - 1][yMaxIndex];
		} else {
			botLeft = board[x - 1][y - 1];
		}
	}

	if (x === xMaxIndex) {
		// on the far right side
		right = board[0][y];

		if (y === yMaxIndex) {
			topRight = board[0][0];
		} else {
			topRight = board[0][y + 1];
		}

		if (y === 0) {
			botRight = board[0][yMaxIndex];
		} else {
			botRight = board[0][y - 1];
		}
	} else {
		right = board[x + 1][y];

		if (y === yMaxIndex) {
			topRight = board[x + 1][0];
		} else {
			topRight = board[x + 1][y + 1];
		}

		if (y === 0) {
			botRight = board[x + 1][yMaxIndex];
		} else {
			botRight = board[x + 1][y - 1];
		}
	}

	if (y === yMaxIndex) {
		top = board[x][0];
	} else {
		top = board[x][y + 1];
	}

	if (y === 0) {
		bot = board[x][yMaxIndex];
	} else {
		bot = board[x][y - 1];
	}

	const neighbors = [
		left,
		right,
		top,
		bot,
		topLeft,
		topRight,
		botLeft,
		botRight
	];

	return neighbors.filter(alive => alive).length;
};
