import React from 'react';
import Header from './components/Header';
import News from './components/News';
import YoutubeFrame from './components/videoFrame/YoutubeFrame';

const App = () => {
	return (
		<div className='container'>
			<Header />

			<News />
			<YoutubeFrame />
		</div>
	);
};

export default App;
