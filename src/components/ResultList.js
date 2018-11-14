import React from "react";
import ResultCard from "./ResultCard";

const ResultList = props => {
  const buildResultCards = () =>
    props.results.map(result => <ResultCard data={result} />);

  return <div>{buildResultCards()}</div>;
};

export default ResultList;
