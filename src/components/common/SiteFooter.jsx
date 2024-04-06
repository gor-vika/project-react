import { LazyLoadImage } from 'react-lazy-load-image-component'
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
                        <LazyLoadImage 
                        src={logo} alt="logo"
                        />
                    </a>
                </div>
                <div className="copyright">&copy;2024</div>
                <p className="copyright-text">All materials on this website are the property of Company X.</p>
                <ul className="footer-social-list">
                    <li>
                        <Link to='https://twitter.com/' target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#twitter"></use>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/' target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#instagram"></use>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.tiktok.com/' target="_blank" rel="noreferrer, nofollow">
                            <svg>
                                <use xlinkHref="assets/img/icons-sprite.svg#tiktok"></use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-menu-block">
                <ul>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='/#feedback-link'>Testimonials</Link></li> 
                    <li><Link to='/#membership-link'>Features</Link></li>
                </ul>
            </div>
            <div className="footer-menu-block">
                <ul>
                    <li><Link to='episodes'>Episodes</Link></li>
                    <li><Link to="/#pricing">Pricing</Link></li> {/*не працює перенаправлення до секції? */}
                </ul>
            </div>
            <div className="footer-platforms-block">
                <div className="footer-platforms-list">Listen to episodes on your fav platform:</div>
                <ul className="platforms flex">
                    <li>
                        <Link to='https://podcasts.google.com/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage 
                                src={googlePodcast} alt="google-podcasts-logo"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.spotify.com/ua-uk/free/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage 
                                src={spotify} alt="spotify-logo"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage 
                                src={youtube} alt="youtube-logo"
                            />
                        </Link>
                    </li>
                </ul>
                <div className="footer-platforms-list">App available on:</div>
                <ul className="footer-store-platforms">
                    <li>
                        <Link to='https://www.apple.com/app-store/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage 
                                src={AppStore} alt="app store logo"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://play.google.com/store/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage 
                                src={GooglePlay} alt="google play logo" 
                            />
                        </Link>
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