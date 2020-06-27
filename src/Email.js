import React from 'react';
import './Search.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Email extends React.Component {
	
		
	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this); 
		this.state = {
		  email: ""
		};
	}

	goBack(){
		this.props.history.goBack();
	}
	
	changeEmail(event) {
		this.setState({email: event.target.value})
	}
	
	render() {
		return (
			<div>
				<div>
					<h4>Email Search</h4>
					<input className = "search-box" value={this.state.email} onChange={this.changeEmail.bind(this)}/>
				</div>
				<button onClick={this.goBack}>go back</button>
			</div>
		);
	}
}

export default Email;