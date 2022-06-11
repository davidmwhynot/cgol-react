import api from './worker';
import * as Api from './worker/api/types';

import { CELL_WIDTH, CELL_HEIGHT, ALIVE_COLOR, DEAD_COLOR } from './config';

export const Cell: React.FC<{ cell: Api.Cell }> = ({ cell }) => {
	const { x, y, alive } = cell;

	return (
		<div
			style={{
				width: CELL_WIDTH,
				height: CELL_HEIGHT,
				backgroundColor: alive ? ALIVE_COLOR : DEAD_COLOR,
				position: 'absolute',
				left: x * CELL_WIDTH,
				top: y * CELL_HEIGHT,
				userSelect: 'none'
			}}
			onMouseDown={() => api.updateBoard({ ...cell, alive: !alive })}
			onMouseEnter={e => {
				if (e.buttons === 1) {
					api.updateBoard({ ...cell, alive: !alive });
				}
			}}
		/>
	);
};
