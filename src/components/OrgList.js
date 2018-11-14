import React, { Component } from 'react';
import styled from 'styled-components';

const StyledOrgs = styled.div`
    margin-bottom: 1rem;
`

const StyledLinks = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 1rem;
`

class OrgList extends Component {
	render() {
		const orgs = [ 'Free Code Camp', 'Elixir', 'React bootstrap', 'Please.com', 'DuckDuckGo', 'EcoLab', '...' ];
		const displayOrgs = orgs.map((result) => <StyledOrgs><StyledLinks href=''>{result}</StyledLinks></StyledOrgs>);

		return <div>{displayOrgs}</div>;
	}
}

export default OrgList;
