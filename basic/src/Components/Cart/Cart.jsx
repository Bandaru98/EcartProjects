import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementquantity, removeFromCart } from '../Redux/ProductAction/ProductAction';


const Cart = () => {
    // cartdata from redux variables
    const cart_data = useSelector((state) => state.Productdata.cartdata)
    console.log(cart_data);

    const totalprice = cart_data.reduce((accumulatorvalue, currentvalue) => {
        return accumulatorvalue + currentvalue.price * currentvalue.quantity
    }, 0)

    const dispatch = useDispatch()

    return (
        <>
            {/* cart page */}
            <div className='container' style={{ backgroundColor: '#f6f9fc' }}>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-md-8'>
                        {/* conditional rendering */}
                        {cart_data && cart_data.length ? (
                            cart_data.map((item) => (
                                <div className='row ms-1 me-1 mt-4 mb-4' style={{ backgroundColor: '#ffffff' }}>
                                    <div className='col-md-4 '>
                                        <img src={item.imgUrl} alt={item.id} className='img-fluid' />
                                    </div>
                                    <div className='col-md-8 '>
                                        <div className='d-flex justify-content-between' >
                                            <h4 className='mt-4'>{item.productName}</h4>
                                            <Link className='fw-bold mt-3' style={{ color: 'black' }}
                                                onClick={() => { dispatch(removeFromCart(item.id)) }}
                                            ><i className="bi bi-x-lg"></i>
                                            </Link>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mt-4'>
                                            <h6>
                                                <span className='text-secondary'>${item.price}</span> *
                                                <span className='text-secondary'>${item.quantity}</span>
                                                <span className='ms-4'>${item.quantity * item.price}</span>
                                            </h6>
                                            <div className='me-4'>
                                                <button className='pb-1' style={{ border: '0px' }}
                                                    onClick={() => {
                                                        dispatch(addToCart(item));
                                                    }}
                                                >+</button>
                                                <button className='ms-1 ps-2 pe-2 pb-1' style={{ border: '0px' }}
                                                    onClick={() => { dispatch(decrementquantity(item.id)) }}
                                                >-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '25vh' }}>
                                <h4>No Items add in cart</h4>
                            </div>
                        )
                        }
                    </div>

                    {/* Cart Summary */}
                    <div className='col-md-4 mt-3 mb-3' >
                        <div className='row m-2' style={{ backgroundColor: '#ffffff', height: '25vh' }}>
                            <h6 className='mt-4'>Cart Summary</h6>
                            <hr />
                            <p>Total Price :</p>
                            <h3>$ {totalprice}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart


