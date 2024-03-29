export default function SiteBtn({btnText, className, classWrap, onClick}){
    return <div className={classWrap}>
        <button className={className} type="button" onClick={onClick}>{btnText}</button>
    </div>
}