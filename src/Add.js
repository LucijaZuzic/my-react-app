import React, { useState } from "react";
import { AddUser } from './App.js';

const Add = (props) => {
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	
	return (
		<div>
			<h2>Add User</h2>
			<div>
				<label className="user">User first name:
				<input className="user" value={first_name} onChange = {(e) => setFirstName(e.target.value)}/>
				</label>
			</div>
			<div>
				<label className="user">User last name:
				<input className="user" value={last_name}  onChange = {(e) => setLastName(e.target.value)}/>
				</label>
			</div>
			<div>  
				<label className="user">User email:
				<input className="user" value={email}  onChange = {(e) => setEmail(e.target.value)}/>
				</label>
			</div>
			<div>
				<label className="user">User avatar:
				<input className="user" value={avatar} onChange = {(e) => setAvatar(e.target.value)}/>
				</label>
			</div>
			<div>
			<button 
				onClick={() => {
						if (first_name !== "" && last_name !== "" && email !== "" && avatar !== "") {
							AddUser({
								first_name,
								last_name,
								email,
								avatar,
							});
						}
						setFirstName("");
						setLastName("");
						setEmail("");
						setAvatar("");
				}}
				>add</button>
			</div>
		</div>
	)
}

export default Add;