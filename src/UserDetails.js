import React from "react";
import './UserDetails.css';
import { users } from './App.js'
import ReactDOM from 'react-dom'
import { ModifyUser } from './App.js';
import { DeleteUser } from './App.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class UserDetails extends React.Component {
	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this); 
		this.state = {
		  first_name: users[this.props.index].first_name,
		  last_name: users[this.props.index].last_name,
		  email: users[this.props.index].email,
		  avatar: users[this.props.index].avatar
		};
	}

	goBack(){
		this.props.history.goBack();
	}
	
	changeFirstName(event) {
		this.setState({first_name: event.target.value})
	}
	
	changeLastName(event) {
		this.setState({last_name: event.target.value})
	}
	
	changeEmail(event) {
		this.setState({email: event.target.value})
	}
	
	changeAvatar(event) {
		this.setState({avatar: event.target.value})
	}

	render() {		
		return (
			<div>
				<h2>{users[this.props.index].first_name.toUpperCase()} {users[this.props.index].last_name.toUpperCase()} Details</h2>
				<div><span>id: {users[this.props.index].id}</span></div>
				<div>
				  <label>first name:
					<input value={this.state.first_name} placeholder="first_name" onChange={this.changeFirstName.bind(this)}/>
				  </label>
				</div>
				<div>
				  <label>last name:
					<input value={this.state.last_name} placeholder="last_name" onChange={this.changeLastName.bind(this)}/>
				  </label>
				</div>
				<div>  
				  <label>email:
				  	<input value={this.state.email} placeholder="email" onChange={this.changeEmail.bind(this)}/>
				  </label>
				</div>
				<div>
				  <label>avatar: 
					<input value={this.state.avatar} placeholder="avatar" onChange={this.changeAvatar.bind(this)}/>
				  </label>
				</div>
				<div>
				  <img src={this.state.avatar} alt={this.state.avatar}/>
				</div>
				<div>
				  <button onClick={<ModifyUser index = {this.props.index}  first_name = {this.state.first_name} last_name = {this.state.last_name} email = {this.state.email} avatar = {this.state.avatar}/>}>save</button>
				</div>
				<div>
				  <button onClick={<DeleteUser index = {this.props.index}/>}>delete</button>
				</div>
				<div>
				  <button onClick={this.goBack}>go back</button>
				</div>
			</div>
		)
	}
}


export default UserDetails;