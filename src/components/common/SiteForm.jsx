import { useState } from "react"
import FormElement from "../FormElement"
import { toast } from 'react-toastify';

export default function SiteForm(){

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })
    const [error, setError] = useState({
        name: {
            isValid: true,
            message: ''
        },
        phone: {
            isValid: true,
            message: ''
        },
        email: {
            isValid: true,
            message: ''
        },
        subject: {
            isValid: true,
            message: ''
        },
        message: {
            isValid: true,
            message: ''
        }
    })

    const changeHandler = (target) => {
        setValues({...values, [target.name]: target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let isValid = true

        const fieldsToCheck = ['name', 'phone', 'email', 'subject', 'message'];
        const errors = {}
        fieldsToCheck.forEach(field => {
            if(values[field] === ''){
                errors[field] = {isValid: false, message: `Enter your ${field}, please`}
                isValid = false
            } else {
                errors[field] = {isValid: true, message: ``}
            }

    });
        setError(errors)

        if(isValid){
        const message = `<b>Name: </b>${values.name}\r\n
            <b>Phone: </b>${values.phone}\r\n
            <b>Email: </b>${values.email}\r\n
            <b>Subject: </b>${values.subject}\r\n
            <b>Message: </b>${values.message}
            `
        var url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

        fetch(url, {
            method: 'post'
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.ok){
                    setValues({
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                    toast.success('Your message succefulle sent')
                } else {
                    toast.error('Some error occured')
                }
            })

        } 
        else {
            toast.error('Please fill in all fields')
        }

    }

    return (
        <form onSubmit={submitHandler} method="post" className="contacts-form container">
            <div className="flex ">
                <div className="form-column">
                    <FormElement 
                        type="text"
                        label="Full name"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        error={error.name}
                        changeHandler={changeHandler}
                        required={true}
                    />
                    <FormElement 
                        type="tel"
                        label="Phone"
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        error={error.phone}
                        changeHandler={changeHandler}
                        required={true}
                    />
                </div>
                <div className="form-column">
                    <FormElement 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        value={values.email}
                        error={error.email}
                        changeHandler={changeHandler}
                        required={true}
                    />
                    <FormElement 
                        type="text"
                        label="Subject"
                        name="subject"
                        placeholder="Subject..."
                        value={values.subject}
                        error={error.subject}
                        changeHandler={changeHandler}
                        required={true}
                    />
                </div>
            </div>
            <FormElement 
                type="textarea"
                label="Message"
                name="message"
                placeholder="Your message goes here..."
                value={values.message}
                error={error.message}
                changeHandler={changeHandler}
                rows="8"
                required={true}
            />
            <div className="flex form-button">
                <div><span>*</span>required</div>
                <div className="btn-block btn-section">
                    <button type="submit" className="btn main-btn">SEND MESSAGE</button>
                </div>
                <div>Viverra at port accumsan. <span>Orci non</span></div>
            </div>  
        </form>
    )
}