import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SectionFeedback(){

    const [feedbackItem, setFeedbackItem] = useState([])

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

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
    return (
        <section className="section blue">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text feedback">What our listeners say</h3>
                </div>
                <div className="subtitle-text">Their experience throughout every platform</div>
                <Slider {...settings} className="quote feedback-slider">
                    {feedbackItem.map((item, index)=>(
                        <div className="feedback-item" key={index}>
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
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}