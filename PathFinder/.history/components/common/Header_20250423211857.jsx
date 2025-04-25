import React from 'react'
import { navigation } from '../data/data'

function Header() {
    return (
        <header>
            {
                navigation.map((data, index))
            }
        </header>
    )
}

export default Header
