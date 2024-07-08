import SiteBtn from "./common/SiteBtn"
import Episodes from "./Episodes"
import { useNavigate } from "react-router-dom"

export default function SectionEpisodes(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/episodes')
    }

    return (
        <section className="section beige">
        <div className="container">
            <div className="title-wrap">
                <h3 className="subtitle sub-text">Recent Episodes</h3>
            </div>
            <div className="subtitle-text">Available on your favorite platform</div>
            <Episodes search='podcast' qty='6'/>
            <div className="btn-block btn-section">
                <SiteBtn btnText='BROWSE ALL EPISODES' className='btn main-btn' onClick={handleClick} />
            </div>
        </div>
    </section>
    )
}