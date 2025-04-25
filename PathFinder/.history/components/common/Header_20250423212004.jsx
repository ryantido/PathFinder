import React from 'react'
import { navigation } from '../data/data'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            {
                navigation.map((data) => (
                    <Link to={data.path}><
                ))
            }
        </header>
    )
}

export default Header
