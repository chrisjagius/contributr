import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	margin: 0 0 2rem 0;
	justify-content: center;
	height: 50px;
	width: 500px;
	padding-left: 20px;
	font-size: 0.75rem;
	box-shadow: 0 10px 6px -6px #777;
	border: 0.2px solid lightgrey;
`;

const StyledButton = styled.button`
	justify-content: center;
	height: 3.2rem;
	width: 4rem;
	color: white;
	background-color: #0078d7;
	font-size: 1rem;
	border: none;
`;
const Search = () => {
	return (
		<div>
			<StyledInput type="text" placeholder="Enter Project name..." />
			<StyledButton type="submit">Search</StyledButton>
		</div>
	);
};

export default Search;
