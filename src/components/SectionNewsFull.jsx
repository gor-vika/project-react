import News from '../components/News'
import { useState } from 'react';

export default function SectionNewsFull(){

    const [searchCriteria, setSearchCriteria] = useState('Google Podcast');
    const [activeButton, setActiveButton] = useState('All');
    const [refresh, setRefresh] = useState(false)

    const handleSearchChange = (newSearchCriteria) => {
        setSearchCriteria(newSearchCriteria);
        setActiveButton(newSearchCriteria.charAt(0).toUpperCase() + newSearchCriteria.slice(1));
        setRefresh(true)
    };
    return(
        <section className="section white full-episode">
        <div className="container">
            <div className="title-wrap">
                <h3 className="subtitle sub-text feedback">Latest Posts</h3>
            </div>
            <div className="full-episode-list">
                <div><button className={`btn-episode ${activeButton === 'All' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange(' ')}>All</button></div>
                <div><button className={`btn-episode ${activeButton === 'Business' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('business')}>Business</button></div>
                <div><button className={`btn-episode ${activeButton === 'News' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('news')}>News</button></div>
                <div><button className={`btn-episode ${activeButton === 'Trips&Trick' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('trip')}>Trips&Trick</button></div>
                <div><button className={`btn-episode ${activeButton === 'Podcast' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('podcast')}>Podcast</button></div>
                <div><button className={`btn-episode ${activeButton === 'Productivity' ? 'active' : ''}`} type="button" onClick={() => handleSearchChange('producivity')}>Productivity</button></div>             
            </div>
            <News key={refresh} search={searchCriteria} qty={4}/>
        </div>
        </section>
    )
}
