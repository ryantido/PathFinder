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
                <p>Localisation : {location}</p>
                <p>Type de contrat : {contrat}</p>                
                <p>Salaire : {salary}</p>
            </div>
        </div>
    )
}

export default Jobscard
