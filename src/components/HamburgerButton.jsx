import React from 'react';
export default function HamburgerButton({ mobileMenu, toggleMenu }){
    return (
        <button className="hamburger-button" onClick={toggleMenu}>
            <div className={mobileMenu ? 'line line-1 open' : 'line line-1'}></div>
            <div className={mobileMenu ? 'line line-2 open' : 'line line-2'}></div>
            <div className={mobileMenu ? 'line line-3 open' : 'line line-3'}></div>
        </button>
    )
}