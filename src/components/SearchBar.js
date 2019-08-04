import React from "react";
import "./searchBar.css";

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
      <div className="grid artist-submit">
        <form onSubmit={this.onSubmit}>
          <div className="ui big icon input">
            <input
              type="text"
              placeholder="Search for an Artist"
              value={this.state.artist}
              onChange={this.onChange}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
