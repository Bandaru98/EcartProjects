import React from 'react'
import { discoutProducts } from '../../Images/products'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/ProductAction/ProductAction'
import { toast } from 'react-toastify'

const Card1 = () => {
  const dispatch = useDispatch()

  return (
    <>
      {/* Bigdiscount */}
      <div style={{ backgroundColor: '#f6f9fc' }}>
        {/* w-75 using container width is adjusted  */}
        <div className='container mt-4 mb-4'>
          <div className='row mt-4 g-4'>
            <h2 className='text-center mt-4 mb-3'>Big Discount</h2>
            {discoutProducts.map((items) => (
              <div className='col-md-4'>
                <div className='card' key={items.id}>
                  <div className='d-flex justify-content-between m-2'>
                    <span className='ps-2 pe-2 p-1' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                    <i className="bi bi-heart" ></i>
                  </div>
                  <div className='card-body'>
                    <Link to={`product/${items.id}`}>
                      <div className='card-img-top align-items-center  d-flex justify-content-center '>
                        <img src={items.imgUrl} className="img-fluid" alt={items.id} style={{ height: '150px' }} />
                      </div>
                    </Link>
                  </div>
                  <div className='card-title ms-4'>
                    <h6>{items.productName}</h6>
                    <span className='d-flex mt-3 mb-1'>
                      <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                    </span>
                  </div>
                  <div className='d-flex ms-4 me-4 mb-4 justify-content-between align-items-center'>
                    <h6>$ {items.price}</h6>
                    <button
                      style={{
                        border: '0px', borderRadius: '50%', width: '45px', height: '45px', paddingBottom: '5px', fontSize: '25px'
                      }}
                      onClick={() => {
                        dispatch(addToCart(items));
                        toast.success('Item add in the cart')
                      }}
                    >+
                    </button>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1











