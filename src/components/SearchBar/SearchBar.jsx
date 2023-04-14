import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchQuery: ""
  };
  handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({
      searchQuery: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
