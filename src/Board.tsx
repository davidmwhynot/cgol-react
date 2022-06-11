import { useEffect, useState, useRef } from 'react';
// import { proxy } from 'comlink';

import api from './worker';
import * as Api from './worker/api/types';

import { CELL_WIDTH, CELL_HEIGHT, BOARD_WIDTH, BOARD_HEIGHT } from './config';
// import { Cell } from './Cell';

const updateCanvas = (canvas: HTMLCanvasElement) => {
	let board_: Api.Board;
	const ctx = canvas.getContext('2d');

	canvas.addEventListener('click', e => {
		const x = (e.x - (e.x % CELL_WIDTH)) / CELL_WIDTH;
		const y = (e.y - (e.y % CELL_HEIGHT)) / CELL_HEIGHT;

		api.updateBoard({
			x,
			y,
			alive: !board_[x][y]
		});
	});

	canvas.addEventListener('mousemove', e => {
		// console.log('e', e);
		if (e.buttons === 1) {
			api.updateBoard({
				x: (e.x - (e.x % CELL_WIDTH)) / CELL_WIDTH,
				y: (e.y - (e.y % CELL_HEIGHT)) / CELL_HEIGHT,
				alive: true
			});
		}
	});

	if (!ctx) return console.log;

	const makeCell = (cell: Api.Cell) => {
		ctx.fillStyle = cell.alive ? 'white' : 'black';

		ctx.fillRect(
			cell.x * CELL_WIDTH,
			cell.y * CELL_HEIGHT,
			CELL_WIDTH,
			CELL_HEIGHT
		);
	};

	return (board: Api.Board) => {
		board_ = board;

		for (let x = 0; x < board.length; ++x) {
			const row = board[x];

			for (let y = 0; y < row.length; ++y) {
				const alive = row[y];

				makeCell({ x, y, alive });
			}
		}
	};
};

export const Board: React.FC = () => {
	// const [board, setBoard] = useState<Api.Board>([[false]]);
	const [canvasSubSet, setCanvasSubSet] = useState(false);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		(async () => {
			// await api.subscribeToBoard(proxy(setBoard));
			await api.setBoard(
				await api.makeEmptyBoard(BOARD_WIDTH, BOARD_HEIGHT)
			);
		})();
	}, []);

	// eslint-disable-next-line
	useEffect(() => {
		if (!canvasSubSet && canvasRef.current !== null) {
			setCanvasSubSet(true);
			api.subscribeToBoard(updateCanvas(canvasRef.current));
			// api.subscribeToBoard(proxy(updateCanvas(canvasRef.current)));
		}
	});

	return (
		<canvas
			ref={canvasRef}
			width={CELL_WIDTH * BOARD_WIDTH}
			height={CELL_HEIGHT * BOARD_HEIGHT}
		/>
	);
};
