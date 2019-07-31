import React from "react";
import SearchBar from "./SearchBar";
import itunes from "../apis/itunes";
import TrackList from "./TrackList";
import AudioPlayer from "./AudioPlayer";
import "./base.css";

class App extends React.Component {
  state = {
    tracks: [],
    initialArtist: "",
    trackPlaying: "",
    trackToPlay: "",
    isPlaying: false
  };

  componentDidMount() {
    this.onArtistSubmit("AJR");
  }

  onTrackPlay = (event, track) => {
    // console.log("event: ", event.type);

    if (track.previewUrl) {
      var audio = document.querySelector("#audio");
      var source = document.querySelector("#audioSource");

      if (track !== this.state.trackPlaying) {
        this.setState({ trackPlaying: track });
        source.src = track.previewUrl;
        audio.load();
      }

      this.setState({ isPlaying: !this.state.isPlaying });
      // !this.state.isPlaying ? audio.play() : audio.pause();
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
        <AudioPlayer
          audioSource={this.state.trackPlaying}
          isPlaying={this.state.isPlaying}
        />
        <TrackList tracks={this.state.tracks} onTrackPlay={this.onTrackPlay} />
      </div>
    );
  }
}

export default App;
