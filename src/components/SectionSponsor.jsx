import { useEffect, useState } from "react"
import SiteBtn from '../components/common/SiteBtn.jsx'
import React from "react"
import Modal from "./common/Modal.jsx"
import SiteForm from '../components/common/SiteForm.jsx'
import { toast } from "react-toastify"

export default function SectionSponsor(){

    const [isOpen, setIsOpen] = useState(false)

     
    const [priceList, setPriceList] = useState([])

    async function getPriceList(){
        try {
            const resp = await fetch('data/price.json')
            const json = await resp.json()
            setPriceList(json)
        } catch {
            toast.error ('Try later', error)
        } 
    }

    useEffect(()=>{
        getPriceList()
    }, [])

    return(<>
        <section className="section white sponsor-sect">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text sponsor">Become our sponsor</h3>
                </div>
                <div className="subtitle-text">Get exclusive episodes, merch and more</div>
                <div className="price-block" id='pricing-section'>
                    {priceList.map((item, index)=> (
                        <div className="price-item-wrap" key={index}>
                            <div className="price-item">
                                <h4 className="price-title">{item.title}</h4>
                                <div className="price-desc">{item.text}</div>
                                <div className="flex btn-block btn-section">
                                    <SiteBtn btnText='SUBSCRIBE' className='btn main-btn' onClick={()=>{setIsOpen(true)}} />
                                    <div className="price">{item.price} <span>/month</span></div>
                                </div>
                            </div>
                            <div className="price-item price-details">
                                <h5 className="benef-title">{item.optionTitle}</h5>
                                <ul className="benef-desc">
                                    {item.options.map((option, idx) => (
                                        <React.Fragment key={idx}>
                                            <li>{option.opt1}</li>
                                            <li>{option.opt2}</li>
                                            <li>{option.opt3}</li>
                                            <li>{option.opt4}</li>
                                            {option.opt5 && <li>{option.opt5}</li>}
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Modal 
            title='Please fill in all fields' 
            isOpen={isOpen} 
            onClose={()=>{setIsOpen(false)}} 
            children={<SiteForm />}>
        </Modal>
        </>
    )
}