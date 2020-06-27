import React from 'react';
import FirstName from './FirstName.js';
import LastName from './LastName.js';
import Email from './Email.js';
import './Search.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Search extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  selectedSearch: -1
		};
    }
	
	render() {
		if (this.state.selectedSearch == -1) {
			return (
				<div>
					<h2>Search User</h2>
					<Router>
					  <div>
						<nav>
							<Link to="/user-search-by-first-name"  onClick={() => this.setState({selectedSearch: 1})}>By First Name</Link>
							<Link to="/user-search-by-last-name"  onClick={() => this.setState({selectedSearch: 2})}>By Last Name</Link>
							<Link to="/user-search-by-email"  onClick={() => this.setState({selectedSearch: 3})}>By Email</Link>
						</nav>
					  </div>
					</Router>
				</div>
			);
		} else {
			if (this.state.selectedSearch == 1) {
				return <FirstName />;
			} else {
				if (this.state.selectedSearch == 2) {
					return <LastName />;
				} else {
			    	return <Email />;
				}
			}
		}
	}
}

export default Search;