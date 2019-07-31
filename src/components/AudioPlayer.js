import React from "react";

class AudioPlayer extends React.Component {
  state = { trackPlaying: "" };

  render() {
    console.log("this.props.isPlaying: ", this.props.isPlaying);

    if (this.props.audioSource.previewUrl) {
      console.log("boop");
    }

    return (
      <div>
        <audio id="audio">
          <source id="audioSource" src={this.props.audioSource.previewUrl} />
          Your browser does not support the audio format.
        </audio>
        <h3>
          Now Playing: {this.props.audioSource.trackName} by{" "}
          {this.props.audioSource.artistName}
        </h3>
      </div>
    );
  }
}

export default AudioPlayer;
