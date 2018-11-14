import React from "react";
import ResultCard from "./ResultCard";

const ResultList = props => {
  const buildResultCards = () => {
    const rawIssuesArr = props.results.map(result => result.node.issues.edges);
    const cleanedIssuesArr = rawIssuesArr.filter(Boolean).flat();

    return cleanedIssuesArr.map(issue => {
      return <ResultCard data={issue.node} />;
    });
  };

  return <ul>{buildResultCards()}</ul>;
};

export default ResultList;
