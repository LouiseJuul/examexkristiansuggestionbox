import React from 'react';
import { Link } from "@reach/router";

function Suggestions(props) {
  const {suggestions} = props;

  if (!suggestions) return <p>Loading...</p>;

  const list = suggestions.map(suggestion =>
    <li key={suggestion._id}>
      <Link to={"/" + suggestion._id}>{suggestion.title}</Link>, {suggestion.description}
    </li>
  );

  return (
    <div>
      <h2>Suggestions</h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default Suggestions;