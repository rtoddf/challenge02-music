import React from "react";
import Moment from "react-moment";

const TrackItem = ({ track }) => {
  return (
    <div key={track.key}>
      <p>{track.trackName}</p>
      <p>{track.artistName}</p>
      <p>
        <Moment format="LL" date={track.releaseDate} />
      </p>
      <p>{track.primaryGenreName}</p>
    </div>
  );
};

export default TrackItem;
