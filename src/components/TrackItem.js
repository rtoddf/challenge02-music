import React from "react";
import Moment from "react-moment";
import "./trackItem.css";

class TrackItem extends React.Component {
  state = {
    trackPlaying: "",
    isPlaying: true,
    isActive: true,
    pauseIcon: "play"
  };

  onClick = e => {
    // remove all active classes
    // isPLaying is off if played while something else is playing
    var elems = document.querySelectorAll(".jukebox-card");

    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      el.classList.add("non-active");
    });

    var icons = document.querySelectorAll(".jukebox-card i");

    [].forEach.call(icons, function(el) {
      el.classList.remove("pause");
      el.classList.add("play");
    });

    this.setState({
      trackPlaying: this.props.track.trackName,
      isPlaying: !this.state.isPlaying,
      isActive: !this.state.isActive,
      pauseIcon: this.state.isPlaying ? "pause" : "play"
    });

    this.props.onTrackPlay(e, this.props.track, this.state.isPlaying);
    // this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div
        key={this.props.track.key}
        onClick={this.onClick}
        className={`jukebox-card ${
          this.state.isActive ? "non-active" : "active"
        }`}
      >
        <div className="inner">
          <div className="song-artwork">
            <i className={`${this.state.pauseIcon} icon`} />
            <img
              src={this.props.track.artworkUrl100}
              alt={this.props.track.trackName}
            />
          </div>
          <div className="song-info">
            <p>
              {this.props.track.trackName} (
              <Moment format="Y" date={this.props.track.releaseDate} />)
            </p>
            <p>{this.props.track.artistName}</p>
            <p>{this.props.track.primaryGenreName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
