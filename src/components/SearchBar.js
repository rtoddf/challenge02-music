import React from "react";

class SearchBar extends React.Component {
  state = { artist: "" };

  onChange = event => {
    this.setState({ artist: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onArtistSubmit(this.state.artist);
  };

  render() {
    return (
      <div className="grid">
        <form onSubmit={this.onSubmit}>
          <label>Artist Search</label>
          <input
            type="text"
            value={this.state.artist}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
