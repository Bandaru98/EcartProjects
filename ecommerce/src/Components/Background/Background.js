import React from 'react'
import Bgimg from '../Images/table.jpg'

const Background = () => {
    return (
        <>
            <div className='position-relative'>
                <img src={Bgimg} alt='table' className='w-100' style={{ height: '35vh', filter: 'brightness(70%)' }} />
                <h4 className='text-light position-absolute top-50 start-50 translate-middle '></h4>
            </div>
        </>
    )
}

export default Background
