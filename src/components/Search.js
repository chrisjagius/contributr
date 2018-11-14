import React from "react";
import styled from 'styled-components'

const StyledInput = styled.input`
  justify-content: center;
  height: 50px;
  width: 500px;
  padding-left: 20px;
  font-size: 0.75rem;
`

const StyledButton = styled.button`
  justify-content: center;
  height: 3.5rem;
  width: 4rem;
  color: white;
  background-color: #0078D7;
  font-size: 1rem;
`
const Search = () => {
  return (
    <div>
      <StyledInput type="text" placeholder="Enter Project name..." />
      <StyledButton type="submit">Search</StyledButton>
    </div>
  );
};

export default Search;
