import React, { useEffect } from "react";
import './Dashboard.css';
import { users } from './App.js'
import { Link } from "react-router-dom";
import { add } from './App.js';

const Dashboard = (props) => {
	useEffect(() => {
		add("UserService: fetched users");
	}); 
	return (
		<div>
			<h3>Top 5 Users</h3>
			<div className="grid grid-pad">
				{users.slice(0,5).map((item, index) =>  (
					<Link to={"/detail/"+users[index].id} className="col-1-5" key = {users[index].id}>
						<div className="module user">
							<h4>{users[index].first_name} {users[index].last_name}</h4>
						</div>
					</Link>
					))
				}
			</div>
		</div>
	);	
}


export default Dashboard;