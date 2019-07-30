import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

class App extends React.Component {
  state = { tracks: [], initialArtist: "" };

  componentDidMount() {
    this.onArtistSubmit("AJR");
  }

  onArtistSubmit = async artist => {
    const response = await itunes.get("/search", {
      params: {
        term: artist.replace(/ /g, "+")
      }
    });

    response.data.results.sort((a, b) => {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });

    this.setState({ tracks: response.data.results.slice(0, 12) });
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
