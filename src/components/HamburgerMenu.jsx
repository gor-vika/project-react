import React from 'react';
import { Link } from 'react-router-dom';
import SiteBtn from './common/SiteBtn';
import { useState } from 'react';
import Modal from './common/Modal';
import SiteForm from './common/SiteForm';

export default function HamburgerMenu({ mobileMenu, toggleMenu }) {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        toggleMenu();
    };
    return (<>
        {mobileMenu && <div className='overlay' onClick={closeMenu}>
            <div className={mobileMenu ? 'hamburger-menu open' : 'hamburger-menu'}>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Main</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/episodes" onClick={closeMenu}>Episodes</Link></li>
                </ul>
                <div className="btn-wrapper">
                    <div><SiteBtn btnText='subscribe' className='btn' onClick={()=>{setIsOpen(true)}} /></div>  
                </div>
            </div>  
        </div>}       
        <Modal title='Please, contact us' isOpen={isOpen} onClose={()=>{setIsOpen(false)}} children={<SiteForm />}>

        </Modal>
        </>
    );
}