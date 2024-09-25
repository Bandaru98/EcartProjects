import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center mt-4'>Register</h2>
                    <hr className='mt-4' />
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form action='http://localhost:3000/' className='mt-2'>
                            <label className='form-label' for='username'>FullName</label>
                            <input type='text' id='username' className='form-control' placeholder='Enter Your FullName here..'required />
                            <label className='form-label mt-4' for='email'>Email</label>
                            <input type='text' id='email' className='form-control' placeholder='Enter your email123@gmail.com here...' />
                            <label className='form-label mt-4' for='password'>Password</label>
                            <input type='text' id='password' className='form-control' placeholder='Enter Your Password here..' />
                            <p className='mt-4'>Already has an account?
                                <Link to='/login'>
                                    Login
                                </Link>
                            </p>
                            <button className='btn btn-info'>Register</button>
                        </form>
                        <div className='mt-4'>Create
                            <span style={{ color: 'red' }}> &#9829; </span> by <u>Your's Favourite Company</u></div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default Register
