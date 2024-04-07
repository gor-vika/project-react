import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function SectionSponsorSlider(){

    const [sponsorList, setSponsorList] = useState([])
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    async function getSponsorList(){
        try {
            const resp = await fetch('data/sponsorSlider.json')
            const json = await resp.json()
            setSponsorList(json)
        } catch (error) {
            toast.error('Try later', error)
        }    
    }

    useEffect(()=>{
        getSponsorList()
    }, [])
   
    return(
        <section className="section beige">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text feedback">Our Sponsor</h3>
                </div>
                <div className="subtitle-text">Our current official sponsor</div>
                <div className="partner-slider">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        modules={[Navigation]}
                        loop={true}
                        breakpoints={{
                            540: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                            
                        }}
                        className="quote feedback-slider"     
                    >
                    {sponsorList.map((item, index) => (
                        <SwiperSlide key={index} className="partner-block">
                            <div className="partner-logo">
                                    <LazyLoadImage src={item.logo} alt={item.title}/>
                                </div>
                                <div className="partner-desc">{item.description}</div>
                        </SwiperSlide>
                    ))}
                    <div ref={navigationPrevRef} className="slide-prev">
                        <span className="arrow"></span>
                    </div>
                    <div ref={navigationNextRef} className="slide-next">
                        <span className="arrow"></span>
                    </div>
                </Swiper>
                </div>
            </div>
        </section>
    )
}