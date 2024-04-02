import { LazyLoadImage } from 'react-lazy-load-image-component'
import googlePodcast from '../assets/img/google-podcasts.svg'
import spotify from '../assets/img/spotify.svg'
import youtube from '../assets/img/youtube.svg'
import SiteBtn from './common/SiteBtn'
import { Link } from 'react-router-dom'

export default function SectionDownload(){
    return(
        <section className="section blue download-sect">
            <div className="container">
                <span className="pre-title">BETA</span>
                <h3 className="subtitle sub-text">Available now Pod of Cast App</h3>
                <div className="subtitle-text">We just launched our podcast app!</div>
                <Link to='https://apps.apple.com/' target="_blank" rel='noreferrer, nofollow'>
                    <SiteBtn btnText='DOWNLOAD NOW' className='btn main-btn' classWrap='btn-block btn-section' />
                </Link>                   
                <div className="download-text">Content also available on:</div>
                <ul className="download-social-list">
                    <li>
                        <Link to='https://podcasts.google.com/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage src={googlePodcast} alt="google podcasts logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.spotify.com/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage src={spotify} alt="spotify logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/' target="_blank" rel="noreferrer, nofollow">
                            <LazyLoadImage src={youtube} alt="youtube logo"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}