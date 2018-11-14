import React from "react";
import ResultCard from "./ResultCard";

const ResultList = props => {
  const buildResultCards = () => {
    if (props.results) {
      const rawIssuesArr = props.results.map(result => {
        return { name: result.name, data: result.issues.edges };
      });
      const cleanedIssuesArr = rawIssuesArr
        .filter(obj => obj.data.length !== 0)
        .flat();
      console.log({ rawIssuesArr, cleanedIssuesArr });
      return cleanedIssuesArr.map(issue => {
        const resultCards = issue.data.map(obj => (
          <ResultCard data={obj.node} />
        ));
        return (
          <div>
            <h1>{issue.name}</h1>
            {resultCards}
          </div>
        );
      });
    }
  };

  return <ul>{buildResultCards()}</ul>;
};

export default ResultList;
