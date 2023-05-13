import { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function Home() {
  const [user, setUser] = useState(null);

  const fetchUserData = () => {
    fetch("https://api.spotify.com/v1/me", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="mx-auto">
      <p className="text-xl font-bold">Welcome to this place</p>
      {user && (
        <div className="rounded">
          <p className="text-xl font-bold mb-4">{user.display_name}</p>
          <img
            className="rounded-xl mx-auto px-5 "
            width={150}
            src={user.images[0].url}
          />
        </div>
      )}
      <Search />
    </div>
  );
}
