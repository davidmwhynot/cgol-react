import { evolveBoard } from '.';

let clearer: number | null = null;

export const setRunning = (running: boolean): void => {
	if (running && clearer === null) {
		clearer = setInterval(evolveBoard, 50) as unknown as number;
	}

	if (!running && clearer !== null) {
		clearInterval(clearer);
		clearer = null;
	}
};
