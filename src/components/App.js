import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import "./base.css";

class App extends React.Component {
  state = { tracks: [], initialArtist: "", trackPlaying: "", playing: false };

  componentDidMount() {
    this.onArtistSubmit("prince");
  }

  onTrackPlay = track => {
    var audio = document.querySelector("#audio");
    var source = document.querySelector("#audioSource");

    if (track !== this.state.trackPlaying) {
      console.log("new song");

      this.setState({ trackPlaying: track });
      source.src = track;
      audio.load();
    }

    if (!this.state.playing) {
      this.setState({ playing: true });
      audio.play();
    } else {
      this.setState({ playing: false });
      audio.pause();
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
        <audio id="audio" controls="controls">
          <source id="audioSource" src={this.state.trackPlaying} />
          Your browser does not support the audio format.
        </audio>

        <SearchBar onArtistSubmit={this.onArtistSubmit} />
        <TrackList tracks={this.state.tracks} onTrackPlay={this.onTrackPlay} />
      </div>
    );
  }
}

export default App;
