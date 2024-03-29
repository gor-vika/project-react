import googlePodcast from '../../assets/img/Google-Podcast.png'
import spotify from '../../assets/img/Spotify.png'
import youtube from '../../assets/img/Youtube.png'
import AppStore from '../../assets/img/app-store.svg'
import GooglePlay from '../../assets/img/google-play.svg'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function SiteFooter(){
    return(
        <footer className="footer">
        <div className="container flex">
            <div className="copyright-block">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="copyright">&copy;2024</div>
                <p className="copyright-text">All materials on this website are the property of Company X.</p>
                <ul className="footer-social-list">
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#twitter"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#tiktok"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-menu-block">
                <ul>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to=''>Testimonials</Link></li> {/*як зробити перенаправлення до секції? */}
                    <li><Link to=''>Features</Link></li>
                </ul>
            </div>
            <div className="footer-menu-block">
                <ul>
                    <li><Link to='episodes'>Episodes</Link></li>
                    <li><Link to=''>Pricing</Link></li>
                    {/* <li>Blog</li> */}
                </ul>
            </div>
            <div className="footer-platforms-block">
                <div className="footer-platforms-list">Listen to episodes on your fav platform:</div>
                <ul className="platforms flex">
                    <li><a href="https://podcasts.google.com/" target="_blank" rel="noreferrer, nofollow">
                        <img src={googlePodcast} alt="google-podcasts-logo" />
                    </a></li>
                    <li><a href="https://www.spotify.com/ua-uk/free/" target="_blank" rel="noreferrer, nofollow">
                        <img src={spotify} alt="spotify-logo" />
                    </a></li>
                    <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer, nofollow">
                        <img src={youtube} alt="youtube-logo" />
                    </a></li>
                </ul>
                <div className="footer-platforms-list">App available on:</div>
                <ul className="footer-store-platforms">
                    <li>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer, nofollow">
                            <img src={AppStore} alt="app store logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://play.google.com/store/" target="_blank" rel="noreferrer, nofollow">
                            <img src={GooglePlay} alt="google play logo" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="all-rights-reserved">
                &copy;2024. All Rights Reserved.<span> Pod of Cast</span>
            </div>
        </div>
    </footer> 
    )
}