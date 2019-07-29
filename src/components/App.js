import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";

class App extends React.Component {
  state = { tracks: [] };

  onArtistSubmit = async artist => {
    const response = await itunes.get("/search", {
      params: {
        term: artist.replace(/ /g, "+")
      }
    });

    this.setState({ tracks: response.data.results });

    console.log("tracks: ", this.state.tracks);
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
