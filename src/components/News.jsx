import { useEffect, useRef, useState } from "react"
import NewsItem from "./NewsItem"
import Pagination from "./Pagination"
import { RotatingLines } from 'react-loader-spinner'

export default function News(props){

    const [itemNews, setItemNews] = useState([])
    const isFetch = useRef(false)

    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    const [isLoading, setLoading] = useState(false)


    const gotoHandler = (newPage) => {
        setPage(newPage)
        isFetch.current = false
    }

    async function searchNews(req){
        const storedNews = localStorage.getItem(`newsList_${props.search}`)
        if (storedNews){
            setItemNews(JSON.parse(storedNews))
            setTotal(parseInt(localStorage.getItem(`totalPagesNews_${props.search}_${props.qty}`)) || 0)
            return
        }
        setLoading(true)
        const offset = ((page - 1) * props.qty) || 0
        const resp = await fetch(`https://api.worldnewsapi.com/search-news?text=${req}&language=en&source-countries=us&number=${props.qty}&offset=${offset}&api-key=${import.meta.env.VITE_WN_API_KEY}`)
        const json = await resp.json()
        localStorage.setItem(`newsList_${props.search}`, JSON.stringify(json.news))
        const totalPages = Math.ceil(json.available / props.qty)
        localStorage.setItem(`totalPagesNews_${props.search}_${props.qty}`, totalPages)
        setItemNews(json.news)
        setTotal(totalPages)
        setLoading(false)
    }

    useEffect(()=>{
        if(!isFetch.current){
            isFetch.current = true
            searchNews(`${props.search}`)
        }
    }, [props.search])

    useEffect(() => {
        if(isLoading)
            return

        if (!isFetch.current) {
            isFetch.current = true;
            searchNews(props.search);
        }
    }, [props.search, props.qty, page, isLoading]);

    return(<>
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
    <div className="grid news-list">
        {itemNews.map(item => <NewsItem item={item} key={item.id} />)}
    </div>
    <Pagination page={page} total={total} gotoHandler={gotoHandler}/>
    </>
    )
}