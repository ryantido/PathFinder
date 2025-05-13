import React from 'react'

function Jobscard({logo, title}) {
    return (
        <div className='job-container'>
            <div className='logo'>
                <img src={logo} alt="logo" />

            </div>
        </div>
    )
}

export default Jobscard
