import { useState } from "react";
import Footer from "./Footer";
import Track from "./Track";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState(null);

  const handleSearch = () => {
    console.log(searchQuery);

    fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setTracks(res.tracks.items));
  };

  return (
    <div className="mt-10 text-left">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="text-xl"
      >
        <h3 className="font-bold">Search for music</h3>

        <div className="flex mt-4 justify-between w-full">
          <input
            required
            min={4}
            className="p-3 text-xl shadow font-bold bg-white text-black w-full"
            placeholder="Search on Spotify"
            type="search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
          ></input>
          <button className="p-3 font-bold ml-3 br-4 bg-pink-300 text-white text-black">
            Search
          </button>
        </div>
      </form>

      {tracks && (
        <div className="flex mt-4">
          <div className="flex flex-col justify-around w-full pr-4 mr-6">
            Song
          </div>
          <div>
            <span className="text-slate-400">Duration</span>
          </div>
        </div>
      )}

      {tracks && tracks.map((track, i) => <Track key={i} track={track} />)}

      {!tracks && <Footer />}
    </div>
  );
}
