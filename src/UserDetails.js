import React, { useState } from "react";
import "./UserDetails.css";
import { users } from "./App.js";
import ReactDOM from "react-dom";
import { ModifyUser } from "./App.js";
import { DeleteUser } from "./App.js";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserDetails = (props) => {
  let history = useHistory();

  const [firstName, setFirstName] = useState(users[props.index].first_name);
  const [lastName, setLastName] = useState(users[props.index].last_name);
  const [email, setEmail] = useState(users[props.index].email);
  const [avatar, setAvatar] = useState(users[props.index].avatar);

  return (
    <div>
      <h2>
        {users[props.index].first_name.toUpperCase()}{" "}
        {users[props.index].last_name.toUpperCase()} Details
      </h2>
      <div>
        <span>id: {users[props.index].id}</span>
      </div>
      <div>
        <label>
          first name:
          <input
            value={firstName}
            placeholder="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          last name:
          <input
            value={lastName}
            placeholder="last_name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          email:
          <input
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          avatar:
          <input
            value={avatar}
            placeholder="avatar"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </label>
      </div>
      <div>
        <img src={avatar} alt={avatar} />
      </div>
      <div>
        <button
          onClick={() => {
            const index = props.index;
            const result = ModifyUser({
              firstName,
              lastName,
              email,
              avatar,
              index,
            });

            if (result) {
              return history.goBack();
            }
          }}
        >
          save
        </button>
      </div>
      <div>
        <button onClick={() => <DeleteUser index={props.index} />}>
          delete
        </button>
      </div>
      <div>
        <button onClick={history.goBack}>go back</button>
      </div>
    </div>
  );
};

export default UserDetails;
