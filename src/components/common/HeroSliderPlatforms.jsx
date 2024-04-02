import { Link } from "react-router-dom"

export default function HeroSliderPlatforms(){
    return (
        <ul className="hero-slide-platforms">
            <li>
                <Link to='https://podcasts.google.com/' target="_blank" rel="noreferrer, nofollow">
                    <img src='assets/img/googlePodcastMinilogo.svg' alt="google-podcasts-logo" />
                </Link>
            </li>
            <li>
                <Link to='https://www.spotify.com/ua-uk/free/' target="_blank" rel="noreferrer, nofollow">
                    <img src='assets/img/spotifyLogomini.svg' alt="spotify-logo" />
                </Link>
            </li>
            <li>
                <Link to='https://www.youtube.com/' target="_blank" rel="noreferrer, nofollow">
                    <img src='assets/img/youtubeLogomini.svg' alt="youtube-logo" />
                </Link>
            </li>
        </ul>
    )
}