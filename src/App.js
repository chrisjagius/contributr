import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

class App extends Component {
  state = {
    results: ["foo", "bar"]
  };

  render() {
    return (
      <Page>
        <Search />
        <ResultList results={this.state.results} />
      </Page>
    );
  }
}

export default App;
