import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
export default function PlatmormsMain(){
    return (
        <ul className="platforms flex">
            <li>Supported by:</li>
            <li className='hero-platmosrms-item'>
                <Link to='https://www.spotify.com/ua-uk/free/' target="_blank" rel="noreferrer, nofollow">
                    <LazyLoadImage src='assets/img/Spotify.png' alt="spotify-logo" />
                </Link>
            </li>
            <li className='hero-platmosrms-item'>
                <Link to='https://podcasts.google.com/' target="_blank" rel="noreferrer, nofollow">
                    <LazyLoadImage src='assets/img/Google-Podcast.png' alt="google-podcasts-logo"/>
                </Link>
            </li>
            <li className='hero-platmosrms-item'>
                <Link to='https://www.youtube.com/' target="_blank" rel="noreferrer, nofollow">
                    <LazyLoadImage src='assets/img/Youtube.png' alt="youtube-logo"/>
                </Link>
            </li>
        </ul>
    )
}