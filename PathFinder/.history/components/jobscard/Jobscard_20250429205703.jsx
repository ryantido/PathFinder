import React from 'react'

function Jobscard({logo, title, name, location, contra}) {
    return (
        <div className='job-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />

            </div>
        </div>
    )
}

export default Jobscard
