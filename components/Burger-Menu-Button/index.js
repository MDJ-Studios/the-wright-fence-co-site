import React from 'react';

export default function Burger ({ navOpen, setNavOpen }) {
    const handleClick = () => {
        setNavOpen(!navOpen);
    };

    return (
        <button 
            className="burger"
            onClick={handleClick} 
            >
            <div 
                style={{
                    transform: navOpen ? 'rotate(45deg)' : 'rotate(0)',
                    backgroundColor: navOpen ? '#fff' : '#000',
                    marginBottom: navOpen ? '0' : '5px',
                }} 
                />
            <div 
                style={{
                    transform: navOpen ? 'translateX(20px)' : 'translateX(0)',
                    opacity: navOpen ? 0 : 1,
                    backgroundColor: navOpen ? '#fff' : '#000',
                    marginBottom: navOpen ? '0' : '5px',
                }} 
                />
            <div 
                style={{
                    transform: navOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    backgroundColor: navOpen ? '#fff' : '#000',
                    marginBottom: navOpen ? '0' : '5px',
                }} 
                />
        </button>
    );
};

