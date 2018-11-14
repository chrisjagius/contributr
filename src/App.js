import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";
import OrgList from "./components/OrgList";

class App extends Component {
  state = {
    results: []
  };

  render() {
    const { results } = this.state
    return (
      <Page>
        <Search />
        {results.length ? <ResultList results={results} /> : <OrgList />}
      </Page>
    );
  }
}

export default App;
