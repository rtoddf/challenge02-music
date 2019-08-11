import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import AudioPlayer from "./AudioPlayer";
import "./base.css";

class App extends React.Component {
  state = {
    tracks: [],
    nonResults: false,
    initialArtist: "",
    trackPlaying: "",
    trackToPlay: "",
    isPlaying: false
  };

  componentDidMount() {
    this.onArtistSubmit("AJR");
  }

  onTrackPlay = (event, track, playing) => {
    console.log("playing: ", playing);

    if (track.previewUrl) {
      var audio = document.querySelector("#audio");
      var source = document.querySelector("#audioSource");

      if (track !== this.state.trackPlaying) {
        this.setState({ trackPlaying: track, isPlaying: playing });
        source.src = track.previewUrl;
        audio.load();
      }

      playing ? audio.play() : audio.pause();
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

    this.setState({
      tracks: response.data.results.slice(0, 12),
      noResults: false
    });

    console.log(response.data.results);

    if (response.data.results.length === 0) {
      this.setState({ noResults: true });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="grid headline">
          <h2>Challenge 01 - Artist Search</h2>
        </div>
        <SearchBar onArtistSubmit={this.onArtistSubmit} />
        <AudioPlayer
          audioSource={this.state.trackPlaying}
          playing={this.state.isPlaying}
          noResults={this.state.noResults}
        />
        <TrackList tracks={this.state.tracks} onTrackPlay={this.onTrackPlay} />
      </div>
    );
  }
}

export default App;
