import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSliderPlatforms from "./common/HeroSliderPlatforms";
import { useState, useEffect } from "react";


export default function MainSlider(){
    
    const [slide, setSlide] = useState([])

    useEffect(()=>{
        fetch('data/heroSlider.json')
        .then(response => response.json())
        .then(data => setSlide(data))
        .catch(error => console.error('Error loading slides:', error));
}, []);

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="hero-slider">
            {slide.map((slide,index)=>(
                <div className="my-slick-slide" key={index}>
                    <img src={slide.image} alt={slide.title} />
                    <div className="hero-slide-title">{slide.title}</div>
                    <HeroSliderPlatforms />
                </div>
            ))}

        </Slider> 
    )
}