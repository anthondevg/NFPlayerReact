
import { useEffect, useState } from "react"
import Search from "../components/Search";

export default function Home() {

    const [user, setUser] = useState(null);

    const fetchUserData = () => {
        fetch("https://api.spotify.com/v1/me", {
            method: "get",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
            }
        })
            .then(res => res.json())
            .then(res => { setUser(res) });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>

            Welcome to this place <br />

            {
                user &&
                <div>
                    <p>{user.display_name}</p>
                    <img className="rounded mx-auto" width={100} src={user.images[0].url} />
                    <Search />
                </div>
            }

        </div>


    )
}