import CountUp from 'react-countup';

export default function HeroSectionStatistic(){
    return (
        <div className="statistic">
            <div className="statistic-block">
                <div className="statistic-title" >    
                <CountUp 
                    end={76}
                    duration={2.75}
                    style={{ color: '#cd4631' }}
                    >
                </CountUp>
                <span>K</span></div>
                <div>Community Members</div>
            </div>
            <div className="statistic-block">
                <div className="statistic-title">
                <CountUp 
                    end={128}
                    duration={2.75}
                    style={{ color: '#cd4631' }}
                    >
                </CountUp>
                <span>K</span></div>
                <div>Podcast Subscribers</div>
            </div>
            <div className="statistic-block">
                <div className="statistic-title">
                <CountUp 
                    end={59}
                    duration={2.75}
                    style={{ color: '#cd4631' }}
                    >
                </CountUp>
                <span>K</span></div>
                <div>Daily Listeners</div>
            </div>
        </div> 
    )
}