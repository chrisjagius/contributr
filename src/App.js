import React, { Component } from 'react';

import Page from './components/Page';
import Search from './components/Search';
import ResultList from './components/ResultList';
import OrgList from './components/OrgList';

import GithubAdapter from './adapters/GithubAdapter';

class App extends Component {
	state = {
		results: {}
	};

	componentDidMount() {
		GithubAdapter.getRepos('freeCodeCamp').then((resp) => this.setState({ results: resp }));
	}

	render() {
		const { results } = this.state;
		return (
			<Page>
				<Search />
				<ResultList results={results.nodes} />
			</Page>
		);
	}
}

export default App;
