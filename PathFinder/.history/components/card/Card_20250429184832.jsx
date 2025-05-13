import React from 'react'
import './card.css'

function Card({text}) {
    return (
        <>
            <div className='card'>
                <h3>Developpeur Python</h3>
                <p>
                   {text} 
                </p>
                <button>Voir plus</button>
            </div>
        </>
    )
}

export default Card
