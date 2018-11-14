import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

import GithubAdapter from "./adapters/GithubAdapter";

class App extends Component {
  state = {
    results: {}
  };

  componentDidMount() {
    GithubAdapter.getRepos("freeCodeCamp").then(resp =>
      this.setState({ results: resp })
    );
  }

  render() {
    console.log(this.state.results);

    return (
      <Page>
        <Search />
        <ResultList results={this.state.results.nodes} />
      </Page>
    );
  }
}

export default App;
