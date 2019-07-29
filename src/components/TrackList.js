import React from "react";
import TrackItem from "./TrackItem";

const TrackList = ({ tracks }) => {
  const items = tracks.map(track => {
    return <TrackItem key={track.trackId} track={track} />;
  });

  return items;
};

export default TrackList;
