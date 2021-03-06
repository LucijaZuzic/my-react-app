import React from 'react';
import './App.css';
import Users from './Users.js';
import Dashboard from './Dashboard.js';
import Search from './Search.js';
import Email from './Email.js';
import LastName from './LastName.js';
import FirstName from './FirstName.js';
import Add from './Add.js';
import UserDetails from './UserDetails.js';
import Message from './Message';

import { BrowserRouter as Router, Switch, Redirect, Route,  Link } from "react-router-dom";

//const BrowserHistory = require('react-router/lib/BrowserHistory').default;

const users = [
		{
			id: 1,
			email: "george.bluth@reqres.in",
			first_name: "George",
			last_name: "Bluth",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
		},
			{
			id: 2,
			email: "janet.weaver@reqres.in",
			first_name: "Janet",
			last_name: "Weaver",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
		},
			{
			id: 3,
			email: "emma.wong@reqres.in",
			first_name: "Emma",
			last_name: "Wong",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
		},
			{
			id: 4,
			email: "eve.holt@reqres.in",
			first_name: "Eve",
			last_name: "Holt",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
		},
			{
			id: 5,
			email: "charles.morris@reqres.in",
			first_name: "Charles",
			last_name: "Morris",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
		},
			{
			id: 6,
			email: "tracey.ramos@reqres.in",
			first_name: "Tracey",
			last_name: "Ramos",
			avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
		},
		{
			"id": 7,
			"email": "michael.lawson@reqres.in",
			"first_name": "Michael",
			"last_name": "Lawson",
			"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ];


//<Router history={new BrowserHistory}>

var ref = React.createRef();

const App = (props) => {
	return (
		<div>
			<h1>List of Users</h1>
			<Router>
				<div>
				<nav>
					<Link className="app" to="/dashboard">Top 5 Users</Link>
					<Link className="app" to="/users">All Users</Link>
					<Link className="app" to="/user-add">Add User</Link>
					<Link className="app" to="/user-search">Search User</Link>
				</nav>
				<Switch>
				    <Redirect exact from = "/" to = "/dashboard" />
					<Route path="/users">
						<Users /> 
					</Route>
					<Route path="/dashboard">
						<Dashboard /> 
					</Route>
					<Route path="/user-search">
						<Search /> 
					</Route>
					<Route path="/user-search-email">
						<Email /> 
					</Route>
					<Route path="/user-search-last-name">
						<LastName /> 
					</Route>
					<Route path="/user-search-first-name">
						<FirstName /> 
					</Route>
					<Route path="/user-add">
						<Add /> 
					</Route>
					<Route path="/detail/:id">
						<UserDetails /> 
					</Route>
				</Switch>
				</div>
			</Router>
			<Message ref = {ref}/>
		</div>
	);
}

function DeleteUser(props) {
	ref.current.add("UserService: deleted user id="+users[props.index].id);
	users.splice(props.index, 1);
}

function ModifyUser(props) {
	users[props.index].first_name = props.first_name;
	users[props.index].last_name = props.last_name;
	users[props.index].email = props.email;
	users[props.index].avatar = props.avatar;
	ref.current.add("UserService: updated user id="+users[props.index].id);
}

function AddUser(props) {
	var newUser = 
		{
            "id": users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
            "email": props.email,
            "first_name": props.first_name,
            "last_name": props.last_name,
            "avatar": props.avatar
        };
	users.push(newUser);
	ref.current.add("UserService: added user w/ id="+newUser.id);
}

function add(message) {
	ref.current.add(message);
}

export default App;
export { users };
export { ModifyUser };
export { DeleteUser };
export { AddUser };
export { add };
