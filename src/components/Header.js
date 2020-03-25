import React from 'react';

const Header = () => {
	return (
		<div>
			<div className='container'>
				<div className='navbar sticky-top navbar-expand-sm  mt-2 rounded navbar-dark  bg-danger mb-3'>
					<link className='navbar-toggler' data-toggle='collapse' data-target='#navbarNav' />
					<span className='navbar-toggler-icon' />

					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav font-weight-bold'>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									Menu
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									Tickets
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									Team
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									Schedule
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									News
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									Game Night
								</button>
							</li>
							<li className='nav-item'>
								<button className='nav-link btn btn-outline-dark rounded-border' href='#'>
									The Academy{' '}
								</button>
							</li>
						</ul>
						<form className='form-inline ml-auto'>
							<input className='form-control mr-2' type='text' placeholder='Search' />

							<button className='btn btn-outline-dark'>Search</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
