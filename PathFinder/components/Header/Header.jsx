import React from 'react'

function Header() {
    return (
        <header className='header'>
            <div className='header container'>
                <h1 className='header title'>Job Listings</h1>
                <nav className='header nav'>
                    <ul className='header__list'>
                        <li className='header item'>Home</li>
                        <li className='header item'>About</li>
                        <li className='header item'>Contact</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Header
