import { Link } from "react-router-dom"

export default function FounderSocList(){
    return (
        <ul className="founder-soc-list">
            <li>follow me:</li>
            <li>
                <Link to='https://www.tiktok.com/' target="_blank" rel="noreferrer, nofollow">
                    <svg>
                        <use xlinkHref="assets/img/icons-sprite.svg#tiktok-color"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link to='https://twitter.com/' target="_blank" rel="noreferrer, nofollow">
                    <svg>
                        <use xlinkHref="assets/img/icons-sprite.svg#twitter-color"></use>
                    </svg>
                </Link>
            </li>
            <li>
                <Link to='https://www.instagram.com/' target="_blank" rel="noreferrer, nofollow">
                    <svg>
                        <use xlinkHref="assets/img/icons-sprite.svg#instagram-color"></use>
                    </svg>
                </Link>
            </li>
        </ul>
    )
}