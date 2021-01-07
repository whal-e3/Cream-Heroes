// State Hook
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [search, setSearch] = useState('');

	const searchSubmit = e => {
		e.preventDefault();
		onFormSubmit(search);
	};

	return (
		<div className='ui segment'>
			<form onSubmit={searchSubmit} className='ui form'>
				<div className='field'>
					<label>Welcome to Claire Luvcat</label>
					<input
						type='text'
						onChange={e => setSearch(e.target.value)}
						value={search}
						placeholder='디디'
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
