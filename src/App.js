import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";
import OrgList from "./components/OrgList";

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
        {this.state.results.nodes ? (
          <ResultList results={this.state.results.nodes} />
        ) : (
          <OrgList />
        )}
      </Page>
    );
  }
}

export default App;
