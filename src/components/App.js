import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

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
      <div className="container">
        <SearchBar onArtistSubmit={this.onArtistSubmit} />
        <TrackList tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
