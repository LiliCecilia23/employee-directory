import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
   
  };
  render() {
    return (
        <form className="search">
          <div className="form-group">
            <input
              value={this.state.search}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Search Employees"
            />
            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-info">
              Search
            </button>
          </div>
        </form>
    );
  }
}

export default Search;
