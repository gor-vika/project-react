import { useState, useEffect } from 'react'
import microphone from '../assets/img/microphone-big.png'
import FounderSocList from './FounderSocList'
import { toast } from 'react-toastify'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function SectionHistory(){

    const [founderList, setFounderList] = useState([])

    async function getFounderList(){
        try {
            const resp = await fetch ('data/history.json')
            const json = await resp.json()
            setFounderList(json)
        } catch (error) {
            toast.error ('Try later', error)
        }
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
                    <LazyLoadImage src={microphone} alt="microphone" />
                </div>
                <div className="title-wrap">
                    <h4 className="about-subtitle feedback">{founderList[0]?.title}</h4>
                </div>
                <div className="textcols" dangerouslySetInnerHTML={{__html: founderList[0]?.text}}>
                </div>
                <div className="title-wrap">
                    <h4 className="about-subtitle founder">Founder and Main Host</h4>
                </div>
                <div className="flex founder-wrap">
                    {founderList[1]?.map((item, index)=>(
                        <div className={`flex founder-block ${index === 0 ? 'first-founder' : 'second-founder'}`}  key={index}>
                            <div className="founder-img">
                                <LazyLoadImage src={item.photo} alt={item.name}/>
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