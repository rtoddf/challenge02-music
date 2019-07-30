import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

class App extends React.Component {
  state = { tracks: [], initialArtist: "", trackPlaying: "", playing: false };

  // constructor() {
  //   super();
  //   const snd = new Audio(this.state.trackPlaying);
  // }

  componentDidMount() {
    this.onArtistSubmit("AJR");
    const snd = new Audio(this.state.trackPlaying);
  }

  onTrackPlay = track => {
    console.log("click: ", track);

    this.setState({ trackPlaying: track });

    if (!this.playing) {
      this.snd.play();
      this.setState({ playing: true });
    } else {
      this.snd.pause();
      this.setState({ playing: false });
    }
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
