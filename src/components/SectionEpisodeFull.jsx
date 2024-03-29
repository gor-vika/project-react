import Episodes from "./Episodes";
import { useState } from "react";


export default function SectionEpisodeFull(){

    const [searchCriteria, setSearchCriteria] = useState('podcast');
    const [activeButton, setActiveButton] = useState('All');

    const handleSearchChange = (newSearchCriteria) => {
        setSearchCriteria(newSearchCriteria);
        setActiveButton(newSearchCriteria.charAt(0).toUpperCase() + newSearchCriteria.slice(1));
    };
   

    return(<>
    <section className="section white full-episode">
        <div className="container">
            <div className="full-episode-list">
                <div><button className={`btn-episode ${activeButton === 'All' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('')}>All</button></div>
                <div><button className={`btn-episode ${activeButton === 'Business' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('business')}>Business</button></div>
                <div><button className={`btn-episode ${activeButton === 'Comedy' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('comedy')}>Comedy</button></div>
                <div><button className={`btn-episode ${activeButton === 'Education' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('education')}>Education</button></div>
                <div><button className={`btn-episode ${activeButton === 'Health' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('health')}>Health</button></div>
                <div><button className={`btn-episode ${activeButton === 'News' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('news')}>News</button></div>
                <div><button className={`btn-episode ${activeButton === 'Tech' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('tech')}>Tech</button></div>
            </div>
            <Episodes search={searchCriteria} qty={20}/>
        </div>
        </section>
    </>
    )
}