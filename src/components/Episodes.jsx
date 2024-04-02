import { useEffect, useState, useRef } from "react"
import PodcastItem from "./PodcastItem"
import Pagination from "./Pagination"
import { RotatingLines } from "react-loader-spinner"
import { authFetch } from "../helpers"
import { toast } from "react-toastify"

export default function Episodes(props){

    const [podcastItem, setPodcastItem] = useState([])
    const isFetch = useRef(false)

    const [page, setPage] = useState(parseInt(sessionStorage.getItem(`currentPage`) || 1)) 
    const [total, setTotal] = useState(0)

    const [isLoading, setLoading] = useState(false)

    const gotoHandler = (newPage) => {
        setPage(newPage)
        sessionStorage.setItem(`currentPage`, newPage) 
        isFetch.current = false
    }

    
    async function searchPodcast(req) {
        try{
            const storedEpisodes = localStorage.getItem(`episodesList_${props.search}_${page}_${props.qty}`)
            if (storedEpisodes){
                setPodcastItem(JSON.parse(storedEpisodes))
                setTotal(parseInt(localStorage.getItem(`totalPagesEpisode_${props.search}`)) || 0)
                return
            }
            setLoading(true)
            const offset = (page - 1) * props.qty
        
            const json = await authFetch(`search?q=${req}&type=episode&market=US&limit=${props.qty}&offset=${offset}`)
            localStorage.setItem(`episodesList_${props.search}_${page}_${props.qty}`, JSON.stringify(json.episodes.items))
            const totalPages = Math.ceil(json.episodes.total / props.qty)
            localStorage.setItem(`totalPagesEpisode_${props.search}`, totalPages )
            setPodcastItem(json.episodes.items);  
            setTotal(totalPages)
            setLoading(false)
        } catch (error) {
            toast.error('Error fetching podcast:', error)
        } 
    }

    useEffect(() => {
        const search = props.search === 'all' ? 'podcast' : props.search 
        searchPodcast(search);
    }, [props.search, props.qty, page]);

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
        <div className="grid episodes-list">
            {podcastItem.map(item => <PodcastItem item={item} key={item.id}/>)}
        </div>
        <Pagination page={page} total={total} gotoHandler={gotoHandler}/>
        </>
    )
}