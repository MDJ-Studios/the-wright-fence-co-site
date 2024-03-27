import React from 'react';

export default function Burger ({ isNavOpen, setNavOpen }) {
    const handleClick = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <button 
            className="burger"
            onClick={handleClick} 
            >
            <div 
                style={{
                    transform: isNavOpen ? 'rotate(45deg)' : 'rotate(0)',
                    backgroundColor: 'var(--background)',
                    marginBottom: isNavOpen ? '0' : '5px',
                }} 
                />
            <div 
                style={{
                    transform: isNavOpen ? 'translateX(20px)' : 'translateX(0)',
                    opacity: isNavOpen ? 0 : 1,
                    backgroundColor: 'var(--background)',
                    marginBottom: isNavOpen ? '0' : '5px',
                }} 
                />
            <div 
                style={{
                    transform: isNavOpen ? 'rotate(-45deg)' : 'rotate(0)',
                    backgroundColor: 'var(--background)',
                    marginBottom: isNavOpen ? '0' : '5px',
                }} 
                />
        </button>
    );
};

