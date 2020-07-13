import React from 'react';
import './Search.css';
import { users } from './App.js'
import { useSearch } from "react-use-search";
import { messages } from './Message.js';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchBox = ({ predicate }) => {
  const [filteredUsers, query, handleChange] = useSearch(users, predicate, {
    debounce: 300,
  });
  if (filteredUsers.length > 0) {
    messages.push("UserService: found users matching \""+query+"\"");
  } else {
    messages.push("UserService: no users matching \""+query+"\"");
  } 
  return (
    <div>
      <input
	      className = "search-box" 
        placeholder=""
        value={query}
        onChange={handleChange}
      />
      <ul className="search-result">
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={"/detail/"+user.id}>
              {user.email}
						</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Email = (props) => {
  let history = useHistory();

	return (
		<div>
			<div>
				<h4>Email Search</h4>
				<SearchBox
          			predicate={(user, query) => user.email.toLowerCase().includes(query.toLowerCase())}
        		/>
			</div>
      <button onClick={history.goBack}>go back</button>
		</div>
	);
}

export default Email;