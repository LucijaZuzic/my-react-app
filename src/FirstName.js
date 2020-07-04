import React from "react";
import "./Search.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class FirstName extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      first_name: "",
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  changeFirstName(event) {
    this.setState({ First_name: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h4>First Name Search</h4>
          <input
            className="search-box"
            value={this.state.First_name}
            onChange={this.changeFirstName.bind(this)}
          />
        </div>
        <button onClick={this.goBack}>go back</button>
      </div>
    );
  }
}

export default FirstName;
