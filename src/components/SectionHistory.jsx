import { useState, useEffect } from 'react'
import microphone from '../assets/img/microphone-big.png'
import FounderSocList from './FounderSocList'

export default function SectionHistory(){

    const [founderList, setFounderList] = useState([])

    async function getFounderList(){
        const resp = await fetch ('data/history.json')
        const json = await resp.json()
        setFounderList(json)
    }

    useEffect(()=>{
        getFounderList()
    }, [])

    return (
        <section className="section white">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text">What our listeners say</h3>
                </div>
                <div className="subtitle-text">Their experience throughout every platform</div>
                <div className="feedback-img-wrapper">
                    <img src={microphone} alt="microphone" />
                </div>
                <div className="title-wrap">
                    <h4 className="about-subtitle feedback">About and History</h4>
                </div>
                <div className="textcols">
                    <p> Welcome to our podcast journey!</p>
                    <p><b>Pod of Cast</b> is a platform dedicated to bringing you the best in podcasting entertainment. Our mission is simple: to create compelling content that resonates with our listeners and fosters a sense of community.</p>
                    <p><b>Pod of Cast</b> was founded in [year] by a group of passionate individuals who shared a common love for podcasts. What started as a small passion project has grown into a thriving community of podcast enthusiasts from around the world.</p>
                    <p>Over the years, we've produced a diverse range of podcasts covering topics ranging from pop culture and entertainment to science, history, and beyond. Our commitment to quality and innovation has earned us a loyal following and recognition within the podcasting industry.</p>
                    <p>Join us on this exciting journey as we continue to explore new stories, share insightful conversations, and connect with listeners like you. Thank you for being a part of the <b>Pod of Cast</b> family!
                    </p>
                </div>
                <div className="title-wrap">
                    <h4 className="about-subtitle founder">Founder and Main Host</h4>
                </div>
                <div className="flex founder-wrap">
                    {founderList.map((item, index)=>(
                        <div className={`flex founder-block ${index === 0 ? 'first-founder' : 'second-founder'}`}  key={index}>
                            <div className="founder-img">
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <div className="founder-text">
                                <span>{item.post}</span>
                                <div className="founder-name">{item.name}</div>
                                <div className="founder-desc">{item.description}</div>
                                <FounderSocList />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}