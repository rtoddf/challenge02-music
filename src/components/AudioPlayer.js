import React from "react";
import "./audioPlayer.css";

class AudioPlayer extends React.Component {
  state = { trackPlaying: "", isPlaying: false };

  onClickPurchase = () => {
    if (this.props.audioSource) {
      window.open(this.props.audioSource.trackViewUrl, "_blank");
    }
  };

  render() {
    if (this.props.audioSource.previewUrl) {
    }

    console.log("this.props.audioSource: ", this.props.audioSource);
    console.log("this.props.playing: ", this.props.playing);

    return (
      <div className="grid audio-player">
        <audio id="audio">
          <source id="audioSource" src={this.props.audioSource.previewUrl} />
          Your browser does not support the audio format.
        </audio>
        <h3 className={this.props.playing ? "show" : "hidden"}>
          Now Playing: {this.props.audioSource.trackName} by{" "}
          {this.props.audioSource.artistName}
        </h3>
        <button
          className={`ui button ${this.props.playing ? "show" : "hidden"}`}
          onClick={this.onClickPurchase}
        >
          Purchase this track from iTunes
        </button>
      </div>
    );
  }
}

export default AudioPlayer;
