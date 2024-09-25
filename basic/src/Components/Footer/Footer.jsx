import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <div style={{ backgroundColor: '#0f3460' }}>
                <div className='container text-light'>
                    <div className="row">
                        <div className="col-md-3 mt-4 mb-4 ">
                            <h4 className='mt-4'><span><i class="bi bi-bag-fill"></i></span> Mart</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem quaerat excepturi. Illum quisquam ratione totam facilis. Vero, minima dolore.</p>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <ul className='mt-4 p-md-0' style={{ listStyle: 'none' }}><h5>About Us</h5>
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <ul className='mt-4 p-md-0' style={{ listStyle: 'none' }}><h5>Customer Care</h5>
                                <li>Help Center</li>
                                <li>How To Buy</li>
                                <li>Track Your Order</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mb-4">
                            <ul className='mt-4 p-md-0' style={{ listStyle: 'none' }}><h5>Contact Us</h5>
                                <li>70 washington square South, New York, NY 10012, United States</li>
                                <li>Email:example@gmail.com</li>
                                <li>Phone: +1 1123 456 780</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer