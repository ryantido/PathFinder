import React from 'react'

function Header() {
    return (
        <header className='header'></header>
            <div className='header__container'>
                <h1 className='header__title'>Job Listings</h1>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__item'>Home</li>
                        <li className='header__item'>About</li>
                        <li className='header__item'>Contact</li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Header
