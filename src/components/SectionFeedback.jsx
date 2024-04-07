import { useRef, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function SectionFeedback(){

    const [feedbackItem, setFeedbackItem] = useState([])

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    async function getFeedback(){
        try {
            const resp = await fetch('data/feedback.json')
            const json = await resp.json()
            setFeedbackItem(json[0])
        } catch (error){
            toast.error('Try later', error)
        }
    }

    useEffect(()=>{
        getFeedback()
    }, []);
    
    return (
        <section className="section blue" id="feedback-link">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text feedback">What our listeners say</h3>
                </div>
                <div className="subtitle-text">Their experience throughout every platform</div>
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
                        768: {
                            slidesPerView: 2,
                        }
                    }}
                    className="quote feedback-slider"     
                >
                    {feedbackItem.map((item, index) => (
                        <SwiperSlide key={index} className="feedback-item">
                            <blockquote className="quote-text">{item.text}</blockquote>
                            <div className="quote-author">
                                <div className="photo">
                                    <LazyLoadImage src={item.photo} alt={item.name} />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="icon">
                                    <svg>
                                        <use xlinkHref={item.platform}></use>
                                    </svg>
                                </div>
                                <div className="position">{item.platformTitle}</div>
                            </div>
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
        </section>
    )
}