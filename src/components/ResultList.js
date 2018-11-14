import React from "react";

const ResultList = props => {
  const buildResultCards = () => props.results.map(item => <p>{item}</p>);

  return <div>{buildResultCards()}</div>;
};

export default ResultList;
