import React from "react";
import TrackItem from "./TrackItem";
import "./tracks.css";

const TrackList = ({ tracks }) => {
  const items = tracks.map(track => {
    return <TrackItem key={track.trackId} track={track} />;
  });

  return (
    <div className="grid" data-col="3">
      {items}
    </div>
  );
};

export default TrackList;
