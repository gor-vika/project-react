import { useParams } from "react-router-dom"
import { decode } from "js-base64"
import { useEffect, useState } from "react"

export default function NewsDetailPage(){
    const params = useParams() 
    const [detailNews, setDetailNews] = useState(null)

    async function fetchNewsDetail(){
        const url = encodeURIComponent(decode(params.slug))
        const resp = await fetch(`https://api.worldnewsapi.com/extract-news?analyze=true&url=${url}&api-key=${import.meta.env.VITE_WN_API_KEY}`)
        const json = await resp.json()
        setDetailNews(json)

    }

    useEffect(()=>{
        fetchNewsDetail()
    }, [])

//     // return {detailNews?.title && <></>}

    return(<>
    <main>
        <section className="section">
            {detailNews && (
                <div className="container">
                    <h1>{detailNews.title}</h1>
                </div>
            )}
        </section>
    </main>
    
    
    </>

    )
}