export default function Home() {

    return (
        <div>Welcome to this place <br /> {window.localStorage.getItem("access_token")}</div>
    )
}