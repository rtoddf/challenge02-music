import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

class App extends React.Component {
  state = { tracks: [], initialArtist: "" };

  componentDidMount() {
    this.onArtistSubmit("Taylor Swift");
  }

  onArtistSubmit = async artist => {
    const response = await itunes.get("/search", {
      params: {
        term: artist.replace(/ /g, "+")
      }
    });

    const sorted = response.data.results.sort((a, b) => {
      console.log("a.releaseDate: ", a.releaseDate);
      return a.releaseDate > b.releaseDate;
    });

    console.log("sorted: ", sorted);

    this.setState({ tracks: response.data.results.slice(0, 50) });

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
