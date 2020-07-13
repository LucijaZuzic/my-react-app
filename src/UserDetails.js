import React, { useState } from "react";
import './UserDetails.css';
import { users } from './App.js'
import { ModifyUser } from './App.js';
import { DeleteUser } from './App.js';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { messages } from './Message.js';

var oldid;

const UserDetails = (props) => {
	let history = useHistory();
	let id = useParams().id;
	var i;
	var found = false;
	var index = 0;
	for (i in users) {
		if (users[i].id.toString() === id) {
			found = true;
			index = i;
			break;
		}
	}
	if (id !== oldid) {
		if (found) {
			messages.push("UserService: fetched user id="+id);
		} else {
			messages.push("UserService: getUser id="+id+" failed: undefined");
		}
	}
	oldid = id;
	const [first_name, setFirstName] = useState(users[index].first_name);
	const [last_name, setLastName] = useState(users[index].last_name);
	const [email, setEmail] = useState(users[index].email);
	const [avatar, setAvatar] = useState(users[index].avatar);
	if (found) {
		return (
			<div>
				<h2>{first_name.toUpperCase()} {last_name.toUpperCase()} Details</h2>
				<div><span>id: </span>{id}</div>
				<div>
					<label className="user" >first name:
					<input className="user" value={first_name} placeholder="first_name" onChange={(e) => setFirstName(e.target.value)}/>
					</label>
				</div>
				<div>
					<label className="user" >last name:
					<input className="user" value={last_name} placeholder="last_name" onChange={(e) => setLastName(e.target.value)}/>
					</label>
				</div>
				<div>  
					<label className="user" >email:
					<input className="user" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
					</label>
				</div>
				<div>
					<label className="user" >avatar: 
					<input className="user" value={avatar} placeholder="avatar" onChange={(e) => setAvatar(e.target.value)}/>
					</label>
				</div>
				<div>
					<img src={avatar} alt={ avatar}/>
				</div>
				<div>
					<button className = "detail"
					onClick={() => {
						ModifyUser({ 
							first_name,
							last_name,
							email,
							avatar,
							index,
						});
						oldid = -1;
						return history.goBack();
					}}
					>save</button>
				</div>
				<div>
					<button className = "detail" onClick={() => {
						DeleteUser({index});
						oldid = -1;
						return history.goBack();
					}}
					>delete</button>
				</div>
				<div>
					<button className = "detail" onClick={()=>{oldid=-1;history.goBack()}}>go back</button>
				</div>
			</div>
		)
	} else {
		return(<div></div>)
	}
}

export default UserDetails;