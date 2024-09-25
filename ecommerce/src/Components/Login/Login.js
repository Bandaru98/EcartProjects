import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='container'>
                <div className='row mt-4 mb-4'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h3 className='text-center'>Login</h3>
                        <hr className='mt-4' />
                        <form action='http://localhost:3000/' className='mt-4'>
                            <label className='form-label mt-4' for='email'>Email:</label>
                            <input type='text' id='email' className='form-control' placeholder='Enter your email123@gmail.com here...' required />
                            <label className='form-label mt-4' for='password'>Password:</label>
                            <input type='text' id='password' className='form-control' placeholder='Enter your Password here...' />
                            <p className='mt-4'> New here?
                                <Link to='/register'>
                                    Register
                                </Link>
                            </p>
                            <button className='btn btn-info'>Login</button>
                        </form>
                        <div className='mt-4'>Create
                            <span style={{ color: 'red' }}> &#9829; </span> by <u>Your Favourite shop</u>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default Login



