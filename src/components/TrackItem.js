import React from "react";
import Moment from "react-moment";
import "./trackItem.css";

const TrackItem = ({ track }) => {
  return (
    <div key={track.key} className="jukebox-card">
      <div className="inner">
        <div className="song-artwork">
          <img src={track.artworkUrl100} alt={track.trackName} />
        </div>
        <div className="song-info">
          <p>
            {track.trackName} (<Moment format="Y" date={track.releaseDate} />)
          </p>
          <p>{track.artistName}</p>
          <p>{track.primaryGenreName}</p>
        </div>
      </div>
      <audio controls>
        <source src={track.previewUrl} />
      </audio>
    </div>
  );
};

export default TrackItem;
