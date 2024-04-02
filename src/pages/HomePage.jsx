import SectionSponsor from "../components/SectionSponsor"
import SectionEpisodes from "../components/SectionEpisodes";
import SectionFeedback from "../components/SectionFeedback";
import SectionMembership from "../components/SectionMembership";
import SectionTalkListen from "../components/SectionTalkListen";
import HeroSection from "../components/common/HeroSection";
import SectionDownload from "../components/SectionDownload";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function HomePage(){
    
    return (<>
        <main>
        <HeroSection 
            title="Your Daily"
            titleRed="Podcast"
            text="We cover all kinds of categories and a weekly special guest."
         />
         <LazyLoadComponent>
            <SectionTalkListen />
            <SectionFeedback />
            <SectionMembership />
            <SectionEpisodes/>
            <SectionSponsor/>
            <SectionDownload />
         </LazyLoadComponent>
        </main>
    </>
    )
}