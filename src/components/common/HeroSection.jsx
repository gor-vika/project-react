import { useLocation } from "react-router-dom";
import PlatformsMain from "../PlatformsMain";
import MainSlider from "../MainSlider";
import SiteBtn from "./SiteBtn";
import HeroSectionStatistic from '../HeroSectionStatistic'
import PodcastDetail from "../PodcastDetail";
import Modal from "./Modal";
import { useState } from "react";
import SiteForm from "./SiteForm";
import SectionSponsor from "../SectionSponsor";

export default function HeroSection({ title, titleRed, text }){

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
      };

    return <><section className= {location.pathname==='/' ? "hero-section" : (location.pathname==='/about' ? 'hero-section about' : 'hero-section')}>
        <div className="container">
            <h1 className="title">{title}<span> {titleRed}</span></h1>
            <div className="title-desc">{text}</div>

            {location.pathname==='/' && <SiteBtn btnText='Subscribe' className="btn main-btn" classWrap='btn-block' onClick={() => openModal(<SiteForm />)} />}
            {location.pathname==='/' && <MainSlider />}
            {location.pathname==='/' && <PlatformsMain />}

            {location.pathname==='/about' && 
                <div className="btn-wrapper">
                    <SiteBtn btnText='BECOME SPONSOR' className='btn main-btn btn-transparent' classWrap='btn-block' onClick={() => openModal(<SectionSponsor />)} />
                    <SiteBtn btnText='Subscribe' className='btn main-btn' classWrap='btn-block' onClick={() => openModal(<SiteForm />)}/>
                </div>}
            {location.pathname==='/about' && <HeroSectionStatistic />}

            {location.pathname.startsWith('/episodes/') && <PodcastDetail />}
    </div>   
</section>
<Modal 
    title='Get in Touch' 
    isOpen={isOpen} 
    onClose={()=>{setIsOpen(false)}} 
    children={modalContent}>
</Modal>
</>
}