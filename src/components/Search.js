import React, { Component } from "react";

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
        <input
          type="text"
          placeholder="Search.."
          onChange={e => this.handleChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
