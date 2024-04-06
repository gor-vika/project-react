import Slider from "react-slick";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SectionSponsorSlider(){

    const [sponsorList, setSponsorList] = useState([])

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
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                } 
            }
        ]
      };
    return(
        <section className="section beige">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text feedback">Our Sponsor</h3>
                </div>
                <div className="subtitle-text">Our current official sponsor</div>
                <div className="sponsor-slider">
                    <Slider {...settings}>
                        {sponsorList.map((item, index)=>(
                            <div className="sponsor-block" key={index}>
                                <div className="sponsor-logo">
                                    <LazyLoadImage src={item.logo} alt={item.title}/>
                                </div>
                                <div className="sponsor-desc">{item.description}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}