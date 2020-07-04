import React from "react";
import "./Search.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class LastName extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      last_name: "",
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  changeLastName(event) {
    this.setState({ last_name: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h4>Last Name Search</h4>
          <input
            className="search-box"
            value={this.state.last_name}
            onChange={this.changeLastName.bind(this)}
          />
        </div>
        <button onClick={this.goBack}>go back</button>
      </div>
    );
  }
}

export default LastName;
