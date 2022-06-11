import { Board, Cell } from './types';
import { Subscription } from './Subscription';

let BOARD: Board = [];

const subscriptions: Subscription<Board>[] = [];

const publish = (): void => {
	subscriptions.forEach(subscription => subscription.update(BOARD));
};

export const getBoard = (): Board => BOARD;

export const setBoard = (board: Board): void => {
	BOARD = board;

	publish();
};

export const updateBoard = (cell: Cell): void => {
	BOARD[cell.x][cell.y] = cell.alive;

	publish();
};

export const subscribeToBoard = (cb: (board: Board) => void): void => {
	subscriptions.push(new Subscription(cb));
};
