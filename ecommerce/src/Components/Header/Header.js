import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='navbar navbar-expand-lg bg-body-tertiary ' style={{ height: '100px' }}>
                <div className='container-fluid'>
                    <div className='navbar-brand ms-4'>
                        <h2>Ecommerce</h2>
                    </div>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className='navbar-nav ms-auto me-4 mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/products'>Products</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/about'>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto me-4 mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/login'>
                                    <button className='btn btn-secondary'>Login</button>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/register'>
                                    <button className='btn btn-secondary'>Register</button>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/cart'>
                                    <button className='btn btn-secondary'>Cart</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
