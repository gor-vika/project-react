import SectionSponsor from "../components/SectionSponsor"
import SectionEpisodes from "../components/SectionEpisodes";
import SectionFeedback from "../components/SectionFeedback";
import SectionMembership from "../components/SectionMembership";
import SectionTalkListen from "../components/SectionTalkListen";
import HeroSection from "../components/common/HeroSection";
import SectionNews from "../components/SectionNews";
import SectionDownload from "../components/SectionDownload";

export default function HomePage(){
    
    return (<>
        <main>
        <HeroSection 
            title="Your Daily"
            titleRed="Podcast"
            text="We cover all kinds of categories and a weekly special guest."
         />
        <SectionTalkListen />
        <SectionFeedback />
        <SectionMembership />
        <SectionEpisodes/>
        <SectionSponsor />
        {/* <SectionNews /> */}
        <SectionDownload />
        </main>
    </>
    )
}