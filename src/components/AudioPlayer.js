import React from "react";

class AudioPlayer extends React.Component {
  render() {
    return (
      <audio id="audio">
        <source id="audioSource" src={this.props.audioSource} />
        Your browser does not support the audio format.
      </audio>
    );
  }
}

export default AudioPlayer;
