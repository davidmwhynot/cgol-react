export const Navbar: React.FC = () => (
	<nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom border-light py-0 py-lg-2">
		<div className="container">
			<a className="navbar-brand" href="#">
				Navbar
			</a>

			<button
				className="navbar-toggler my-2 my-lg-0"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Home
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>

					<li className="nav-item dropdown dropdown-dark">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
						>
							Dropdown
						</a>

						<ul className="dropdown-menu dropdown-menu-dark">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>

							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>

							<li>
								<hr className="dropdown-divider" />
							</li>

							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</li>

					<li className="nav-item">
						<a className="nav-link disabled">Disabled</a>
					</li>
				</ul>

				<form className="d-flex mb-2 mb-lg-0">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
					/>

					<button className="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	</nav>
);
