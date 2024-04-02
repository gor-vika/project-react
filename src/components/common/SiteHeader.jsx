import logo from '../../assets/img/logo.png'
import SiteBtn from './SiteBtn'
import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import Modal from './Modal';
import { useState } from 'react';
import SiteForm from './SiteForm';

export default function SiteHeader(){
    
    const [isOpen, setIsOpen] = useState(false)

    return (
    <header className="header">
        <div className="container flex">
            <div className="logo">
                <NavLink to='/'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><NavLink to='/'>Main</NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                    <li><NavLink to='episodes'>Episodes</NavLink></li>
                </ul>
            </nav>
            <div className="btn-wrapper">
                <div>
                    <Link to='episodes'>
                      <SiteBtn btnText='Recent episodes' className='btn btn-transparent'/>
                    </Link>
                </div>
                <div><SiteBtn btnText='subscribe' className='btn' onClick={()=>{setIsOpen(true)}} /></div>
            </div>
        </div>
        <Modal title='Please, contact us' isOpen={isOpen} onClose={()=>{setIsOpen(false)}} children={<SiteForm />}>

        </Modal>
    </header>
    )
}