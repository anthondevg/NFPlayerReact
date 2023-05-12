import { useState } from "react"

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [tracks, setTracks] = useState([]);

    const handleSearch = () => {
        console.log(searchQuery);

        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
            }
        })
            .then(res => res.json())
            .then(res => setTracks(res.tracks.items));
    }

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <input required min={4} className="p-2 mt-4" placeholder="Search on Spotify" type="search" onChange={(e) => { setSearchQuery(e.target.value) }} value={searchQuery}></input>
                <button className="p-2 ml-4 br-4 mx-auto bg-white text-black rounded">Search data</button>
            </form>

            {tracks && tracks.map((track, i) =>
                <div key={i} className="flex p-4 w-100 m-4 bg-black shadow">
                    <h3>Name: {track.name}</h3>
                    <h5>Album: {track.album.name}</h5>
                    <img width={100} src={track.album.images[1].url} alt="megadeth" />
                </div>
            )}
        </div>
    );
}