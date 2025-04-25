import React from 'react'
import { navigation } from '../data/data'

function Header() {
    return (
        <header>
            {
                navigation.map((i))
            }
        </header>
    )
}

export default Header
