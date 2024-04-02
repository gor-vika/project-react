import { useEffect, useState } from "react"
import SiteBtn from '../components/common/SiteBtn.jsx'
import Modal from "./common/Modal.jsx"
import SectionSponsor from "./SectionSponsor.jsx"
import { toast } from "react-toastify"

export default function SectionMembership(){

    const [isOpen, setIsOpen] = useState(false)

    const [benefitList, setBenefitList] = useState([])

    async function getBenefitList(){
        try {
            const resp = await fetch('data/membership.json')
            const json = await resp.json()
            setBenefitList(json)
        } catch {
            toast.error('Try later', error)
        } 
    }

    useEffect(()=>{
        getBenefitList()
    }, [])

    return (<>
        <section className="section white">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text">Membership benefits</h3>
                </div>
                <div className="subtitle-text">Become our sponsor and get all benefits</div>
                <div className="benefits" >
                    {benefitList.map((item,index)=>(
                        <div className="benefit-item" key={index}>
                            <div className="benef-img-wrap">
                                <svg>
                                    <use x="50%" y="0" xlinkHref={item.image}></use>
                                </svg>
                            </div> 
                            <div className="benef-title">{item.title}</div>
                            <p className="benef-desc">{item.text}</p>
                        </div> 
                    ))}
                </div>
                <SiteBtn btnText='SEE PRICING' className='btn main-btn' classWrap='btn-block btn-section' onClick={()=>{setIsOpen(true)}}/>
            </div>
        </section>
    <Modal 
        title='Please, choose your tariff plan' 
        isOpen={isOpen} 
        onClose={()=>{setIsOpen(false)}} 
        children={<SectionSponsor />}>
    </Modal>
    </>
    )
}