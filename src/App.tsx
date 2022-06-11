import { useEffect, useState } from 'react';
import './App.scss';

import api from './worker';

// import { Navbar } from './Navbar';
import { Board } from './Board';
import { BOARD_HEIGHT, BOARD_WIDTH } from './config';

export const App: React.FC = () => {
	const [running, setRunning] = useState(false);

	useEffect(() => {
		api.setRunning(running);
	}, [running]);

	return (
		<>
			<Board />
			<div className="container-fluid mt-3">
				<div className="card">
					<div className="card-header">
						<button
							className="btn btn-primary me-2"
							onClick={() => setRunning(!running)}
						>
							{running ? 'Stop' : 'Start'}
						</button>

						<button
							className="btn btn-primary me-2"
							onClick={() => api.evolveBoard()}
						>
							Evolve
						</button>

						<button
							className="btn btn-primary"
							onClick={async () =>
								api.setBoard(
									await api.makeEmptyBoard(
										BOARD_WIDTH,
										BOARD_HEIGHT
									)
								)
							}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
