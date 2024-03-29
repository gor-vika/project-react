export default function Modal({isOpen, title, children, onClose}){

    return(
        <div className={`modal-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                    <div className="modal-close">
                        <button type="button" onClick={()=>{onClose()}}>&#9747;</button>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        {children}                    
                    </div>
                </div>
            </div>
        </div>
    )
}