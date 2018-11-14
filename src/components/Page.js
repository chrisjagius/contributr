import React from 'react';
import styled from 'styled-components';

const Center = styled.div`text-align: center;`;

const StyledHeader = styled.header`
	margin: 2rem;
	grid-template-columns: auto 1fr;
	justify-content: space-between;
	align-items: stretch;
	font-size: 5rem;
	color: #0078d7;
`;

const Page = (props) => {
	return (
		<Center>
			<StyledHeader>Contributr</StyledHeader>
			{props.children}
		</Center>
	);
};

export default Page;
