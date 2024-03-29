import SectionDownload from "../components/SectionDownload";
import SectionEpisodeFull from "../components/SectionEpisodeFull";
import HeroSection from "../components/common/HeroSection";

export default function EpisodesPage(){
    return (<>
        <main>
            <HeroSection 
                title="Podcasts "
                titleRed="Episodes"
                text="Explore the Latest Episodes of Your Favorite Podcasts"
            />
            <SectionEpisodeFull />
            <SectionDownload />
        </main>
    </>
    )
}