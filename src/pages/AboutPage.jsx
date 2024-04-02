import SectionDownload from '../components/SectionDownload.jsx'
import SectionForm from '../components/SectionForm.jsx'
import SectionHistory from '../components/SectionHistory.jsx'
import SectionSponsorSlider from '../components/SectionSponsorSlider.jsx'
import HeroSection from '../components/common/HeroSection.jsx'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export default function AboutPage(){
    return(
        <main>
            <HeroSection 
                title="About"
                titleRed="Pod of Cast"
                text="Explore the Fascinating World of Pod of Cast"
            />
            <LazyLoadComponent>
                <SectionHistory />
                <SectionSponsorSlider />
                <SectionForm />
                <SectionDownload />
            </LazyLoadComponent>    
        </main>
    )
}