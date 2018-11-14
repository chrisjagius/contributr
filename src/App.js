import React, { Component } from "react";

import Page from "./components/Page";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

class App extends Component {
  render() {
    return (
      <Page>
        <Search />
        <ResultList />
      </Page>
    );
  }
}

export default App;
