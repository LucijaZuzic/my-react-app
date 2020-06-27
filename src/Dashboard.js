import React from "react";
import './Dashboard.css';
import { users } from './App.js'
import UserDetails from './UserDetails.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  selectedUser: -1
		};
    }
	render() {
		if (this.state.selectedUser == -1) {
			return (
				<div>
					<h3>Top 5 Users</h3>
					<div className="grid grid-pad">
						{users.slice(0,5).map((item, index) =>  (
							<Router>
							<Link to={"/detail/"+users[index].id} className="col-1-5" onClick={() => this.setState({ selectedUser: index })}>
								<div className="module user">
									<h4>{users[index].first_name} {users[index].last_name}</h4>
								</div>
							</Link>
							</Router>
							))
						}
					</div>
				</div>
			);
		} else {
			return(
				<UserDetails index={this.state.selectedUser}/>
			);
		}
	}
}

export default Dashboard;