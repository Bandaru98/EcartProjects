import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, decrementquantity, removeFromCart } from '../../Redux/ProductAction/ProductAction';

const Cart = () => {

    const dispatch = useDispatch();
    const cart_data = useSelector((state) => state.productdata.cartdata);
    console.log(cart_data);

    const totalprice = cart_data.reduce((prevsValue, currentValue) => {
        return prevsValue + currentValue.price * currentValue.quantity;
    }, 0)

    return (
        <>
            <div className='container' style={{ backgroundColor: '#f6f9fc' }}>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-md-8'>
                        
                        {cart_data && cart_data.length ? (
                            cart_data.map((item) => (
                                <div className='row ms-1 me-1 mt-4 mb-4' style={{ backgroundColor: '#ffffff' }} key={item.id}>
                                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                        <img src={item.image} alt={item.title} className='img-fluid h-50' />
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='d-flex justify-content-between mt-4 mb-4 me-4'>
                                            <h4 className='mt-4'>{item.category}</h4>
                                            <Link className='fw-bold mt-3' style={{ color: 'black' }}>
                                                <button style={{ border: '0px', backgroundColor: '#0f3460', color: 'white' }}
                                                    onClick={() => { dispatch(removeFromCart(item.id)) }}>X</button>
                                            </Link>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mt-4'>
                                            <h6>
                                                <span className='text-secondary'>${item.price}</span> *
                                                <span className='text-secondary'> {item.quantity}</span>
                                                <span className='ms-4'>${item.quantity * item.price}</span>
                                            </h6>
                                            <div className='me-4'>
                                                <button className='pb-1'
                                                    style={{ border: '0px', backgroundColor: '#0f3460', color: 'white' }}
                                                    onClick={() => { dispatch(addToCart(item)) }}
                                                >+</button>
                                                <button className='ms-1 ps-2 pe-2 pb-1'
                                                    style={{ border: '0px', backgroundColor: '#0f3460', color: 'white' }}
                                                    onClick={() => { dispatch(decrementquantity(item.id)) }}
                                                >-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '25vh' }}>
                                <h4>Empty Cartlist</h4>
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    <div className='col-md-4 mt-3 mb-3'>
                        <div className='row m-2' style={{ backgroundColor: '#ffffff', height: '25vh' }}>
                            <h5 className='mt-4'>Cart Summary</h5>
                            <hr />
                            <p>Total Price :</p>
                            <h3>${totalprice.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Cart