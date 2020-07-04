import React from "react";
import "./Add.css";
import { users } from "./App.js";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AddUser } from "./App.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  changeFirstName(event) {
    this.setState({ first_name: event.target.value });
  }

  changeLastName(event) {
    this.setState({ last_name: event.target.value });
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changeAvatar(event) {
    this.setState({ avatar: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Add User</h2>

        <div>
          <label>
            User first name:
            <input
              value={this.state.first_name}
              onChange={this.changeFirstName.bind(this)}
            />
          </label>
        </div>
        <div>
          <label>
            User last name:
            <input
              value={this.state.last_name}
              onChange={this.changeLastName.bind(this)}
            />
          </label>
        </div>
        <div>
          <label>
            User email:
            <input
              value={this.state.email}
              onChange={this.changeEmail.bind(this)}
            />
          </label>
        </div>
        <div>
          <label>
            User avatar:
            <input
              value={this.state.avatar}
              onChange={this.changeAvatar.bind(this)}
            />
          </label>
        </div>
        <div>
          <button onClick={<AddUser />}>add</button>
        </div>
      </div>
    );
  }
}

export default Add;
