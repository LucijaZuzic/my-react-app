import React from 'react';
import './Users.css';
import { users } from './App.js'
import UserDetails from './UserDetails.js';
import { DeleteUser } from './App.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Users extends React.Component {
    constructor(props) {
		super(props);
		var x;
		this.state = {
		  selectedUser: -1
		};
    }
	render () {
		if (this.state.selectedUser == -1) {
			return (
				<div>
					<h2>All Users</h2>
					<Router>
						<ul className="users">
							{users.map((item, index) =>  (
								<li>
									<Link to={"/detail/"+users[index].id} onClick={() => this.setState({ selectedUser: index })}>
										<span className="badge">{users[index].id}</span> {users[index].first_name} {users[index].last_name}
									</Link>
									<button class="delete" title="delete user" onClick={<DeleteUser index = {this.props.index}/>}>x</button>
								</li>
							))}
						</ul>
					</Router>
				</div>
			);
		} else {
			var x = this.state.selectedUser;    
			this.setState({ selectedUser: -1 });
			return(
				
				<UserDetails index={x}/>
			);
		}
	}
}

export default Users;
