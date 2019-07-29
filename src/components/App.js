import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onArtistSubmit = artist => {
    console.log("artist: ");
  };

  render() {
    return (
      <div>
        <SearchBar onArtistSubmit={this.onArtistSubmit} />
      </div>
    );
  }
}

export default App;
