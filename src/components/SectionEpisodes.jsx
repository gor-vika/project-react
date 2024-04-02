import SiteBtn from "./common/SiteBtn"
import Episodes from "./Episodes"
import { Link } from "react-router-dom"

export default function SectionEpisodes(){

    return (
        <section className="section beige">
        <div className="container">
            <div className="title-wrap">
                <h3 className="subtitle sub-text">Recent Episodes</h3>
            </div>
            <div className="subtitle-text">Available on your favorite platform</div>
            <Episodes search='podcast' qty='6'/>
            <Link to='episodes'>
                <SiteBtn btnText='BROWSE ALL EPISODES' className='btn main-btn' classWrap='btn-block btn-section' />
            </Link>
        </div>
    </section>
    )
}