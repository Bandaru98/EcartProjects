import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../Images/products'
import table from '../Images/table.jpg'
import { addToCart } from '../Redux/ProductAction/ProductAction'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Singlepage = () => {

  const { id } = useParams()
  // console.log(id);

  const dispatch = useDispatch()

  const [setitem, setSetitemS] = useState({})
  const [review, setReview] = useState([])
  const [likes, setLikes] = useState([])

  useEffect(() => {
    g();
    window.scrollTo(0, 0);
  }, [id])//useeffect runs when dependency id changes 

  // get initial data
  const g = () => {
    let a = products.find((item) => {
      return item.id === id
    })
    setSetitemS(a)
    setReview(a.reviews)

    const likeitem = products.filter((item) => {
      return item.category === a.category && a.id !== item.id
    })
    setLikes(likeitem)

  }


  return (
    <>
      {/* background image */}

      <div className='position-relative'>
        <img src={table} alt='table' className='w-100' style={{ height: '35vh', filter: 'brightness(50%)' }} />
        <h4 className='text-light position-absolute top-50 start-50 translate-middle '>Products</h4>
      </div>

      {/* Image description */}

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={setitem.imgUrl} alt="image" className='img-fluid' />
          </div>
          <div className="col-md-6 p-4">
            <h3>{setitem.productName}</h3>
            <div className='d-flex mt-4'>
              <span className='me-4'>
                <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              </span>
              <span>{setitem.avgRating}</span>
            </div>
            <div className='d-flex mt-4 mb-4'>
              <h4 className='me-4'><span>${setitem.price}</span></h4>
              <span>Category: {setitem.category}</span>
            </div>
            <p className='mb-2'>{setitem.shortDesc}</p>
            <input type="text" style={{ width: '100px' }} className=' mt-3 mb-2' />
            <div>
              <button className='btn btn-primary mb-4 mt-2'
                onClick={() => {
                  dispatch(addToCart(setitem));
                  toast.success('Item add in the cart')
                }}
              >Add Item</button></div>
          </div>
        </div>

        {/* Description & Reviews */}

        <div className="row mt-4 mb-4">
          <h6>Description
            <Link className='text-decoration-none' data-bs-toggle="collapse" data-bs-target="#Example">
              <span className='text-secondary ms-2'>Reviews ({review.length})</span>
            </Link>
          </h6>

          <div className="collapse" id='Example'>
            {review.map((item) => (
              <div>
                <h4 className='mt-2'>Product rating details</h4>
                <p style={{ color: 'orange' }}>{item.rating} (rating)</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className='mt-3 mb-4'>{setitem.description}</div>
        </div>
      </div>

      {/* you may also like this items data  */}
      <div className="container">
        <h3>You May also like this</h3>
        <div className="row d-flex justify-content-center">
          {likes.map((item) => (
            <div className="col-md-4 mb-4 mt-4">
              <div className="card">
                <div className="card body">
                  <Link to={`/product/${item.id}`}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <img src={item.imgUrl} alt="" className='w-75' />
                    </div>
                  </Link>
                  <div className="card-title ms-4">
                    <h5>{item.productName}</h5>
                  </div>
                  <div className='card-subtitle'>
                    <span className='d-flex mt-4 mb-4 ms-4'>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between ms-4 me-2 mb-2'>
                    <h5>$ {item.price}</h5>
                    <button
                      style={{ border: '0px', borderRadius: '50%', width: '40px', height: '40px', paddingBottom: '4px', fontSize: '150%' }}
                      onClick={() => {
                        dispatch(addToCart(item));
                        toast.success('Item add in the cart')
                      }}
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Singlepage
