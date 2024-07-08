import { LazyLoadImage } from 'react-lazy-load-image-component'
import podcast from '../assets/img/podcast.png'
import { millisecondsToTime } from '../helpers'
import React from 'react'
import { Link } from 'react-router-dom'


export default function PodcastItem(props){
    const item = props.item
   
    return(<>
        <div className="episode-item">
            <div className="flex">
                <div className="img-wrapper">
                    <LazyLoadImage 
                        src={item.images[1].url} alt={item.name} onError={(e)=>{
                            e.target.src={podcast}
                        }}
                    />
                </div>
                <div className="text-content flex">
                {item.audio_preview_url ? (
                    <div className='episode-play'>
                        <Link to={`/episodes/${item.id}`}>Click to listen</Link>
                    </div>
                    ) : null}
                    <h5 className="episode-title">{item.name}</h5>
                    <div className="episode-desc">{item.description}</div>
                </div>
            </div>
            <div className="flex">
                <div className="episode-tag">Release date: {item.release_date}</div>
                <div className="episode-tag episode-duration">{millisecondsToTime(item.duration_ms)}</div>
            </div>
        </div>
    </>
    )
}