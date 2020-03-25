import _ from 'lodash';
import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const API_KEY = 'AIzaSyBwjSAqoy6xf3pFDAjLg891HHAlpURvvFE';

class YoutubeFrame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('bristol flyers');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<div className='row'>
					<VideoDetail video={this.state.selectedVideo} className='col-md-9' />
					<VideoList
						onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
						videos={this.state.videos}
						classname='col-md-3'
					/>
				</div>
			</div>
		);
	}
}

export default YoutubeFrame;
