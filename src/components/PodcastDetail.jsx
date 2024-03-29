import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { authFetch, millisecondsToTime } from "../helpers"
import SiteBtn from "./common/SiteBtn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import React from "react"
import { Link } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import Modal from "./common/Modal.jsx"
import SectionSponsor from "./SectionSponsor"
import SiteForm from "./common/SiteForm"


export default function PodcastDetail(){

    const [isOpen, setIsOpen] = useState(false)
    const params = useParams()
    
    const [detailEpisode, setDetailEpisode] = useState(null)
    const [isLoading, setLoading] = useState(false)

    async function fetchDetailEpisode(){
        const storedPodcast = localStorage.getItem(`podcast_${params.id}`)
        if (storedPodcast){
            setDetailEpisode(JSON.parse(storedPodcast))
            return
        }
        setLoading(true)
        try {
            const json = await authFetch(`episodes/${params.id}?market=us`)
            setDetailEpisode(json)
            localStorage.setItem(`podcast_${params.id}`, JSON.stringify(json))
            setLoading(false)
        } catch {
            toast.error('Something wrong. Try again')
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchDetailEpisode()
    }, [])

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = React.createRef();

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (<>
        {isLoading && <div className="loader">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                strokeColor="#CD4631"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass="loader-ring"
            />
        </div>}
        <div className="flex podcast-detail">
            {detailEpisode && (<>
        <div className="img-wrapper">
            <img src={detailEpisode.images[0].url} alt={detailEpisode.name} />
        </div>
        <div className="podcast-content">
            <h5 className="podcast-title">{detailEpisode.name}</h5>
            <div className="podcast-desc">{detailEpisode.description}</div>
            <div className="flex podcast-tags">
                <div className="episode-tag">Release date: {detailEpisode.release_date}</div>
                <div className="episode-tag episode-duration">{millisecondsToTime(detailEpisode.duration_ms)}</div>
            </div>
            <div className="flex podcast-btn">
                <SiteBtn btnText='Subscribe' className='btn main-btn' classWrap='btn-block btn-section' onClick={()=>{setIsOpen(true)}}/>
                <div className="btn-block btn-section">
                    <button className="btn main-btn btn-transparent" onClick={togglePlay}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} /> }
                        <span>Listen now</span>
                        <audio ref={audioRef} src={detailEpisode.audio_preview_url}></audio>
                    </button>
                </div>
            </div>
        </div>
    </>
     )}    
</div>
<Link to='/episodes'>All Episodes</Link>
<Modal 
    title='Please, contact us' 
    isOpen={isOpen} 
    onClose={()=>{setIsOpen(false)}} 
    children={<SiteForm />}>
</Modal>
</>

    )
}