import React from "react";

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const Track = ({ track, key }) => {
  return (
    <div key={key} className="flex mt-4">
      <img
        width={120}
        height={120}
        src={track.album.images[1].url}
        alt="megadeth"
        className="mr-5 rounded-xl"
      />
      <div className="flex flex-col justify-around w-full pr-4 mr-6">
        <span className="font-bold">{track.name}</span>
        <span>{track.artists[0].name}</span>
        <span>{track.album.name}</span>
      </div>
      <div>
        <span className="text-slate-400">
          {millisToMinutesAndSeconds(track.duration_ms)}
        </span>
      </div>
    </div>
  );
};

export default Track;
