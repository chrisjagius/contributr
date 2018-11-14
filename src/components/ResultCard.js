import React from "react";

const ResultCard = props => {
  const topStr = `#${props.data.number}: ${props.data.title}`;

  return (
    <li>
      <a href={props.data.url}>{topStr}</a>
    </li>
  );
};

export default ResultCard;
