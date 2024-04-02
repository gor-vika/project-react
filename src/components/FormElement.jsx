import { useEffect, useId, useState } from "react"
import InputMask from 'react-input-mask';

export default function FormElement(props){

    const elId = useId()

    const [error, setError] = useState(props.error)

    const changeHandler = (target) => {
        props.changeHandler(target)
    }

    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

    const blurHandler = (target) =>{
        if(props.required && target.value === ''){
            setError({
                isValid: false,
                message: 'This field is required'}
            ) 
        }
        if(props.type==='email'){
            if(target.value !== '' && !isValidEmail(target.value)){
                setError({
                    isValid: false,
                    message: 'Invalid email address'}
                )  
            }
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

    useEffect(()=>{
        setError(props.error)
    }, [props.error])

    return (
        <div className="input-block">
            <label className="form-title" htmlFor={elId}><span>{props.label}</span></label>
            {props.type==='textarea' ? (
                <textarea className={`form-input ${!error.isValid ? 'has-error' : ''}`} type={props.type} name={props.name} id={elId} rows={props.rows} placeholder={props.placeholder} value={props.value} 
                onChange={(e)=>changeHandler(e.target)}
                onBlur={(e)=>blurHandler(e.target)}
                onFocus={(e)=>focusHandler(e.target)}
                ></textarea> 
            ) : 
                props.mask 
                    ? (
                        <InputMask className={`form-input ${!error.isValid ? 'has-error' : ''}`} mask={props.mask} type={props.type} name={props.name} id={elId} placeholder={props.placeholder} value={props.value} 
                        onChange={(e)=>changeHandler(e.target)} 
                        onBlur={(e)=>blurHandler(e.target)}
                        onFocus={(e)=>focusHandler(e.target)}/>
                    )
             : 
            (<input className={`form-input ${!error.isValid ? 'has-error' : ''}`} type={props.type} name={props.name} id={elId} placeholder={props.placeholder} value={props.value} 
            onChange={(e)=>changeHandler(e.target)} 
            onBlur={(e)=>blurHandler(e.target)}
            onFocus={(e)=>focusHandler(e.target)}
            /> )}
            <div className="error-message">{error.message}</div>   
        </div>
    )
}