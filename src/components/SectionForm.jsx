import SiteForm from "./common/SiteForm";

export default function SectionForm(){
    return(
        <section className="section white form">
            <div className="container">
                <div className="title-wrap">
                    <h3 className="subtitle sub-text contacts-title">Get in touch</h3>
                </div>
                <div className="subtitle-text">Send your message to us</div>
                <SiteForm />
            </div>
        </section>
    )
}