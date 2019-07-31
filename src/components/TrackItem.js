import React from "react";
import Moment from "react-moment";
import "./trackItem.css";

class TrackItem extends React.Component {
  render() {
    return (
      <div key={this.props.track.key} className="jukebox-card">
        <div className="inner">
          <div className="song-artwork">
            <img
              src={this.props.track.artworkUrl100}
              alt={this.props.track.trackName}
              onClick={e => {
                this.props.onTrackPlay(e, this.props.track);
              }}
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
