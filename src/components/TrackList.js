import React from "react";
import TrackItem from "./TrackItem";
import "./tracks.css";

const TrackList = ({ tracks }) => {
  const sorted = tracks.sort((a, b) => {
    console.log("a.releaseDate: ", a.releaseDate);
    return a.releaseDate > b.releaseDate;
  });

  console.log("sorted: ", sorted);

  const items = sorted.map(track => {
    return <TrackItem key={track.trackId} track={track} />;
  });

  return (
    <div className="grid" data-col="3">
      {items}
    </div>
  );
};

export default TrackList;
