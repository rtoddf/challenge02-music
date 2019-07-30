import React from "react";
import TrackItem from "./TrackItem";
import "./tracks.css";

const TrackList = ({ tracks, onTrackPlay }) => {
  const items = tracks.map(track => {
    return (
      <TrackItem key={track.trackId} track={track} onTrackPlay={onTrackPlay} />
    );
  });

  return (
    <div className="grid" data-col="3">
      {items}
    </div>
  );
};

export default TrackList;
