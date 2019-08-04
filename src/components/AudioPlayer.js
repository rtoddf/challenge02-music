import React from "react";
import "./audioPlayer.css";

class AudioPlayer extends React.Component {
  state = { trackPlaying: "" };

  onClickPurchase = () => {
    if (this.props.audioSource) {
      window.open(this.props.audioSource.trackViewUrl, "_blank");
    }
  };

  render() {
    if (this.props.audioSource.previewUrl) {
    }

    return (
      <div className="grid audio-player">
        <audio id="audio">
          <source id="audioSource" src={this.props.audioSource.previewUrl} />
          Your browser does not support the audio format.
        </audio>
        <h3>
          Now Playing: {this.props.audioSource.trackName} by{" "}
          {this.props.audioSource.artistName}
        </h3>
        <button className="ui button" onClick={this.onClickPurchase}>
          Purchase this track from iTunes
        </button>
      </div>
    );
  }
}

export default AudioPlayer;
