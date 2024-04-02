import Episodes from "./Episodes";
import { useState } from "react";


export default function SectionEpisodeFull(){

    const [searchCriteria, setSearchCriteria] = useState(sessionStorage.getItem('searchCriteria') || 'all');

    const criterias = ['all', 'business', 'comedy', 'education', 'health', 'news', 'tech']
    
    const handleSearchChange = (newSearchCriteria) => {
        setSearchCriteria(newSearchCriteria);
        sessionStorage.setItem(`searchCriteria`, newSearchCriteria) 
    };
   
    return(<>
    <section className="section white full-episode">
        <div className="container">
            <div className="full-episode-list">
                {criterias.map((item, index) => (
                    <div key={index}><button className={`btn-episode ${searchCriteria === item && 'active'}`} type="button" onClick={() => handleSearchChange(item)}>{item}</button></div>
                ))}               
            </div>
            <Episodes search={searchCriteria} qty='20'/>
        </div>
        </section>
    </>
    )
}