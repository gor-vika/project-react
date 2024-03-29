import SiteBtn from "./common/SiteBtn"
import News from "./News"

export default function SectionNews(){

    return (
        <section className="section white no-scribble">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text">Article and News</h3>
                </div>
                <div className="subtitle-text">News, tips, tricks and more</div>
                <News search='podcast' qty={2}/>
                <SiteBtn btnText='BROWSE ALL' className='btn main-btn' classWrap='btn-block btn-section' />
            </div>
        </section>
    )
}