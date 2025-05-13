import React from 'react'

function Jobscard({logo, title, name, location, contrat, salary}) {
    return (
        <div className='job-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <div className='main-text'></div>
            </div>
        </div>
    )
}

export default Jobscard
