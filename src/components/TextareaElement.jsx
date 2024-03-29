import { useId, useState } from "react"


export default function TextareaElement(props){
    const elId = useId()

    const [error, setError] = useState(props.error)

    const changeHandler = (target) => {
        props.changeHandler(target)
    }

    const blurHandler = (target) =>{
        if(props.required && target.value === ''){
            setError({
                isValid: false,
                message: 'This field is required'}
            ) 
        }
    }

    const focusHandler = (target) => {
        if(!error.isValid){
        setError({
            isValid: true,
            message: ''}
            )   
        }
    }

    return(
        <div className="textarea-block">
            <label className="form-title" htmlFor={elId}><span>{props.label}</span></label>
            <textarea className={`form-input ${!error.isValid ? 'has-error' : ''}`} type={props.type} name={props.name} id={elId} rows={props.rows} placeholder={props.placeholder} value={props.value} 
            onChange={(e)=>changeHandler(e.target)}
            onBlur={(e)=>blurHandler(e.target)}
            onFocus={(e)=>focusHandler(e.target)}
            ></textarea> 
            <div className="error-message">{error.message}</div>  
        </div>
    )
}