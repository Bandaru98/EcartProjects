import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center mt-4'>Contact Us</h2>
                    <hr className='mt-4' />
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form className='mt-4'>
                            <label className='form-label' for='username'>FullName</label>
                            <input type='text' id='username' className='form-control' placeholder='Enter Your Name here..' />
                            <label className='form-label mt-4' for='email'>Email</label>
                            <input type='text' id='email' className='form-control' placeholder='Enter Your Email here..' />
                            <label className='form-label mt-4' for='password'>Message</label>

                            <input type='text' className='form-control' placeholder='Enter your message here..' style={{ height: '10rem' }} />

                            <button className='btn btn-info mt-4'>Send</button>
                        </form>
                        <div className='mt-4 mb-4'>Create
                            <span style={{ color: 'red' }}> &#9829; </span> by <u>Your Favourite Shoping Mall</u>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default Contact