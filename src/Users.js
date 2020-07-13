import './Users.css';
import { users } from './App.js'
import { DeleteUser } from './App.js';
import React, { useState, useEffect } from "react";
import { messages } from './Message.js';
import { Link } from "react-router-dom";

var deletedUser = false;

const Users = (props) =>  {
    const [copyUsers, setUsers] = useState([...users]);

	useEffect(() => {
		if (deletedUser === false) {
			messages.push("UserService: fetched users");
		}
		deletedUser = false;
	});

	return (
		<div>
			<h2>All Users</h2>
			<ul className="users">
				{copyUsers.map((item, index) =>  (
					<li key = {index}>
						<Link to={"/detail/"+copyUsers[index].id}>
							<span className="badge">{copyUsers[index].id}</span> {copyUsers[index].first_name} {copyUsers[index].last_name}
						</Link>
						<button className="delete" title="delete user" onClick={() => {DeleteUser({ index }); deletedUser = true; setUsers([...users])}}>x</button>
					</li>
					))
				}
			</ul>
		</div>
	);
}



export default Users;
