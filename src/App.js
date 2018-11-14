import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

import GithubAdapter from "./adapters/GithubAdapter";

class App extends Component {
  state = {
    results: {}
  };

  getRepos = input => {
    GithubAdapter.getRepos(input).then(resp =>
      this.setState({ results: resp })
    );
  };

  render() {
    console.log(this.state.results);

    return (
      <Page>
        <Search handleSubmit={input => this.getRepos(input)} />
        <ResultList results={this.state.results.nodes} />
      </Page>
    );
  }
}

export default App;
