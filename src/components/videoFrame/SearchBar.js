import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<form className='form-group'>
				<input
					className='form-control my-2'
					type='text'
					name='text'
					placeholder='Search Videos...'
					value={this.state.term}
					onChange={(e) => this.onInputChange(e.target.value)}
				/>
			</form>
		);
	}
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
