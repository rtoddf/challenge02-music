import React from "react";

class SearchBar extends React.Component {
  state = { artist: "" };

  onChange = event => {
    this.setState({ artist: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.artist);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.artist}
            onChange={this.onChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
