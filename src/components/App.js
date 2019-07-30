import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

class App extends React.Component {
  state = { tracks: [], initialArtist: "" };

  componentDidMount() {
    this.onArtistSubmit("AJR");

    const snd = new Audio(
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/0c/de/ce/0cdececd-3190-15cb-6b42-4aa91b685447/mzaf_5059055180140462703.plus.aac.p.m4a"
    );

    // snd.play();
  }

  onTrackPlay = track => {
    console.log("click: ", track);
  };

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

    console.log(response.data.results);
  };

  render() {
    return (
      <div className="container">
        <SearchBar onArtistSubmit={this.onArtistSubmit} />
        <TrackList tracks={this.state.tracks} onTrackPlay={this.onTrackPlay} />
      </div>
    );
  }
}

export default App;
