import React from 'react';

const News = () => {
	return (
		<div className='container'>
			<div>
				<div className='row'>
					<div className='card col-sm-10 col-md-6 col-lg-3  '>
						<img
							className='card-img-top img-fluid'
							alt=''
							src='https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80'
						/>

						<div className='card-body'>
							<h4 className='card-title'>Previous Game</h4>
							<p className='card-text'>
								The moment called for a big finish, and the 76ers (27-16) delivered. Looking to get back
								on track back on their home floor, the Sixers rose to the occasion, fighting their way
								to a hard-earned 117-106 victory over the Brooklyn Nets (18-22).
							</p>
						</div>
					</div>

					<div className='card col-sm-10 col-md-6 col-lg-3  p-3 mr-1'>
						<img
							className='card-img-top img-fluid'
							alt=' food'
							src='https://images.unsplash.com/photo-1505666287802-931dc83948e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80/301x200'
						/>
						<div className='card-body'>
							<h4 className='card-title'>This week streaming live on Youtube</h4>
							<p className='card-text'>
								While a sneak peek last night from Sixers president Chris Heck teased the City Edition
								uniforms, they were officially revealed Wednesday morning with this epic hype video. It
								seemed next to impossible to top last year’s design, as the theme was centered around
								local icon Rocky Balboa. Yes, Rocky is real and an icon but don’t get me started on that
								right now.
							</p>
						</div>
					</div>

					<div className='card col-sm-10 col-md-6 col-lg-3  p-2 mr-1'>
						<img
							className='card-img-top img-fluid'
							alt=''
							src='https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80/302x200'
						/>
						<div className='card-body'>
							<h4 className='card-title'>Meet The Team</h4>
							<p className='card-text'>Meet the players! Coaches ! and the rest of the team</p>
							<p> Volunteer </p>
						</div>
					</div>
					<div className='card col-sm-10 col-md-6 col-lg-3  mr-1 p-2'>
						<blockquote className='card-bodyquote'>
							<h4 className='card-title'>A day out in the community</h4>
							<p className='card-text'>
								We are giving back to the community this Sat between 2 & 6 pm, we are organising a
								family day out, lots of fun and family activities
							</p>
							<footer className='blockquote-footer'>
								<small>
									Follow us on Social Media
									<br />
									Book your tickets now
								</small>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
