import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/ProductAction/ProductAction';
import { toast } from 'react-toastify';

const Productlist = () => {

    const dispatch = useDispatch()

    const [pro, setPro] = useState([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        // console.log(data);
        setPro(result)
    }

    const menscloths = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `men's clothing`
        })
        setPro(getdata)
    }

    const womencloths = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `women's clothing`
        })
        setPro(getdata)
    }

    const jewellery = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `jewelery`
        })
        setPro(getdata)
    }

    const electronics = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `electronics`
        })
        setPro(getdata)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center mt-4'>Latest Products</h3>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 d-flex justify-content-center mb-4 mt-4'>
                        <nav class="nav nav-pills flex-column flex-md-row">
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                                onClick={getdata}>All</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                                onClick={menscloths}>Men's Clothing</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                                onClick={womencloths}>Women Clothing</button>
                            <button className="flex-sm-fill text-sm-center me-2 mt-1 btn btn-secondary"
                                onClick={jewellery}>Jewellery</button>
                            <button className="flex-sm-fill text-sm-center mt-1 btn btn-secondary"
                                onClick={electronics}>Electronics</button>
                        </nav>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>

            {/* Product data */}

            <h3 className='text-center mt-4 mb-4'>Products</h3>
            {pro.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4 d-flex align-items-center justify-content-center'>
                        {pro.map((item) => (
                            <div className='col-md-4'>
                                <div className='card g-4 mb-4'>
                                    <Link to={`/product/${item.id}`}>
                                        <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                            <img src={item.image} alt='image' className='img-fluid'
                                                style={{ height: '200px', width: '200px' }} />
                                        </div>
                                    </Link>
                                    <div className='ms-4'>
                                        <h4>Category: {item.category}</h4>
                                        <div style={{ height: '15rem', overflow: 'hidden' }}>
                                            <p>Desc: {item.description}</p>
                                        </div>
                                        <h5 className='mb-1'>Price: {item.price}</h5>

                                    </div>
                                    <div className='d-flex justify-content-between mt-4 mb-4 ms-4 me-4'>
                                        <h5>Ratings: {item.rating.rate}</h5>
                                        <button className='btn btn-info'
                                            onClick={() => {
                                                dispatch(addToCart(item));
                                                toast.info('Item added')
                                            }}
                                        >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            )
                :
                (<div> No Items</div>)
            }

        </>
    )
}

export default Productlist





















