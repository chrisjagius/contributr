import React, { Component } from "react";
import styled from "styled-components";

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

class Search extends Component {
  state = {
    input: ""
  };

  handleChange(input) {
    this.setState({ input });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(this.state.input);
        }}
      >
        <StyledInput
          type="text"
          placeholder="Search.."
          onChange={e => this.handleChange(e.target.value)}
        />
        <StyledButton type="submit">Search</StyledButton>
      </form>
    );
  }
}

export default Search;
