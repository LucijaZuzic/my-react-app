import React from "react";
import { useSearch } from "react-use-search";

const SearchBox = ({ users, predicate }) => {
  const [filteredUsers, query, handleChange] = useSearch(users, predicate, {
    debounce: 200,
  });

  return (
    <div>
      <input
        placeholder="Search users by first name..."
        value={query}
        onChange={handleChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
