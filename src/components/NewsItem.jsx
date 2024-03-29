import { Link } from 'react-router-dom'
import newsImg from '../assets/img/news-img.jpeg'
import { formatDate } from '../helpers'
import { encode } from 'js-base64'

export default function NewsItem(props){
    const item = props.item
    return(
        <>
        <div className="news-item">
            <div className="flex">
                <div className="img-wrapper">
                    <img src={item.image || newsImg} alt={item.title} onError={(e)=>{
                        e.target.src= newsImg
                    }}/>
                </div>
                <h5 className="news-title">{item.title}</h5>
                <div className="news-desc">{item.text}</div>
            </div>
            <div className="flex news-bootom-tags">
                <div className='news-tag'>
                    <Link to={encode(item.url)}>More info</Link>
                </div>
                {/* {item.author ? (
                    <div className="news-tag">Author: <span>{item.author}</span></div>
                ) : null} */}
                <div className="news-date">{formatDate(item.publish_date)}</div>
            </div>
        </div>
    </>
    )
}