import React, { useState } from 'react';
import FirstName from './FirstName.js';
import LastName from './LastName.js';
import Email from './Email.js';
import { Link } from "react-router-dom";
const Search = (props) => {

	
	const [selectedSearch, setSelectedSearch] = useState(-1);

	if (selectedSearch === -1) {
		return (
			<div>
				<h2>Search User</h2>
					<div>
					<nav>
						<Link to="/user-search-first-name"  onClick={() => setSelectedSearch(1)}>By First Name</Link>
						<Link to="/user-search-last-name"  onClick={() => setSelectedSearch(2)}>By Last Name</Link>
						<Link to="/user-search-email"  onClick={() => setSelectedSearch(3)}>By Email</Link>
					</nav>
					</div>
			</div>
		);
	} else {
		if (selectedSearch === 1) {
			return <FirstName />;
		} else {
			if (selectedSearch === 2) {
				return <LastName />;
			} else {
				return Email();
			}
		}
	}
}

export default Search;