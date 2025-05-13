import React from 'react'

function Jobscard({logo, title, name, location, contrat, salary}) {
    return (
        <div className='job-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <div className='main-text'>
                    {title}
                </div>
            </div>
            <div className='plain-text'>
                <p>Nom de l'entreprise : {name}</p>
                <p>Localisation : </p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default Jobscard
