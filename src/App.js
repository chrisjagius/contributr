import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

import * as repoJson from "./tmp/sampleData.json";

class App extends Component {
  state = {
    results: repoJson["data"]["repositoryOwner"]["repositories"]
  };

  render() {
    return (
      <Page>
        <Search />
        <ResultList results={this.state.results.nodes} />
      </Page>
    );
  }
}

export default App;
