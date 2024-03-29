import { useState, useEffect } from 'react'

export default function SectionTalkListen(){

    const [feedback, setFeedback] = useState([])

    async function getFeedbackMain(){
        const resp = await fetch('data/feedback.json')
        const json = await resp.json()
        setFeedback(json[1])
    }

    useEffect(()=>{
        getFeedbackMain()
}, []);

    return (
        <section className="section white">
            <div className="container">
                <h3 className="subtitle">Talk. Listen. Get inspired by every minute of it.</h3>
                <div className="flex">
                    <div className="talk-listen-block">
                        <svg>
                            <use x="0" y="0" xlinkHref="assets/img/icons-sprite.svg#thinking"></use>
                        </svg>
                        <p>
                            Engage with captivating conversations, insightful dialogues, and thought-provoking discussions.
                        </p>
                    </div>
                    <div className="talk-listen-block">
                        <svg>
                            <use x="60" y="55" xlinkHref='assets/img/icons-sprite.svg#lamp'></use>
                        </svg>
                        <p>
                            Dive into a world of inspiration, knowledge, and discovery with every episode.
                        </p>
                    </div>
                </div>
                
                    {feedback.map((item, index)=>(
                        <div className="quote quote-sect" key={index}>
                            <blockquote className="quote-text">{item.text}</blockquote>
                            <div className="quote-author">
                                <div className="photo">
                                    <img src={item.photo} alt={item.name} />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="icon">
                                    <svg>
                                        <use xlinkHref={item.platform}></use>
                                    </svg>
                                </div>
                                <div className="position">{item.position}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}