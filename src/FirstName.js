import React, { useEffect } from 'react';
//import './Search.css';
import { users } from './App.js'
import { Link } from "react-router-dom";
import { useSearch } from "react-use-search";
import { useHistory } from "react-router-dom";
import { add } from './App.js';

const SearchBox = ({ predicate }) => {
  const [filteredUsers, query, handleChange] = useSearch(users, predicate, {
    debounce: 300,
  });
  useEffect(() => {
		if (filteredUsers.length > 0) {
      add("UserService: found users matching \""+query+"\"");
    } else {
      add("UserService: no users matching \""+query+"\"");
    } 
	}); 
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
              {user.first_name} {user.last_name}
						</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FirstName = (props) => {
  let history = useHistory();

	return (
		<div>
			<div>
				<h4>First Name Search</h4>
				<SearchBox
          			predicate={(user, query) => user.first_name.toLowerCase().includes(query.toLowerCase())}
        		/>
			</div>
      <button onClick={history.goBack}>go back</button>
		</div>
	);
}

export default FirstName;