import SectionNewsFull from "../components/SectionNewsFull";
import HeroSection from "../components/common/HeroSection";

export default function NewsPage(){
    return (<>
        <HeroSection
            title="Article and "
            titleRed="News"
            text="Explore the Latest Articles and News on Podcasting Trends and Insights"
        />
        <SectionNewsFull />
    </>
    )
}