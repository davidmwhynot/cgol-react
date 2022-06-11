import { Board } from './types';

export const makeEmptyBoard = (rows: number, cols: number): Board => {
	const board: Board = [];

	for (let row = 0; row < rows; ++row) {
		const row: boolean[] = [];

		for (let col = 0; col < cols; ++col) {
			row.push(false);
		}

		board.push(row);
	}

	return board;
};
