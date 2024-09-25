import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../../Redux/ProductAction/ProductAction';
import { toast } from 'react-toastify';

const Singlepage = () => {

    const { id } = useParams()
    // console.log(id);
    const dispatch = useDispatch()

    const [pro, setPro] = useState([])
    const [relatedpro, setrelatedpro] = useState([])

    useEffect(() => {
        getdata()
        window.scrollTo(0, 0)
    }, [id])

    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        // console.log(data);
        // setPro(result)
        const eachitem = result.find((item) => item.id === parseInt(id))
        if (eachitem) {
            setPro(eachitem)
            const relatedpro = result.filter((item) => item.category === eachitem.category && item.id !== eachitem.id)
            setrelatedpro(relatedpro)
        }
    }


    return (
        <>
            <h3 className='text-center mt-4 mb-4'>Product Description</h3>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Link to={`/product/${pro.id}`}>
                            <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                <img src={pro.image} alt='image' className='img-fluid' style={{ height: '250px', width: '250px' }} />
                            </div>
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <div className='mt-4 mb-4'>
                            <h4><b style={{ color: 'orangered' }}>Category: </b>  {pro.category}</h4>
                            <p className='mt-3 mb-3'><b>Desc:</b> {pro.description}</p>
                            <h5>Price: {pro.price}</h5>
                            <h5>Ratings: {pro.rating?.rate}</h5>
                        </div>
                        <div>
                            <button className='btn btn-info mt-4 add-cart-btn'
                                onClick={() => {
                                    dispatch(addToCart(pro));
                                    toast.info('Item added')
                                }}
                            >Add to Cart</button>
                            {/* <button type="button" class="btn btn-lg btn-danger" 
                                data-bs-toggle="popover" title="Popover title"
                                 data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                //  onClick={() => { dispatch(addToCart(item)) }}
                                 >Click to toggle popover</button>  */}
                        </div>
                    </div>
                </div>
            </div>


            {/* Related products */}

            <h3 className='text-center mt-4 mb-4'>Products</h3>

            {relatedpro.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4'>
                        {relatedpro.map((item) => (
                            <div className='col-md-4' key={item.id}>
                                <div className='card g-4 mb-4'>
                                    <Link to={`/product/${item.id}`}>
                                        <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                            <img src={item.image} alt='related product' className='img-fluid' style={{ height: '200px', width: '200px' }} />
                                        </div>
                                    </Link>
                                    <div className='ms-4'>
                                        <h4>Category: {item.category}</h4>
                                        <p>Desc: {item.description}</p>
                                        <h4>Price: ${item.price}</h4>
                                        <h4>Ratings: {item.rating.rate}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center">No Related Products</div>
            )}


        </>
    )
}

export default Singlepage






