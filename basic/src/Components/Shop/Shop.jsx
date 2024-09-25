import React, { useEffect, useState } from 'react'
import table from '../Images/table.jpg'
import { Link } from 'react-router-dom'
import { products } from '../Images/products'
import { addToCart } from '../Redux/ProductAction/ProductAction'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Shop = () => {
  const [sales, setSales] = useState([])
  const [coverheading, setcoverheading] = useState('products')

  const dispatch = useDispatch()
  
  useEffect(() => {
    getdata();
    window.scrollTo(0, 0); //smooth pageup
  }, [])
  // get initial category
  const getdata = () => {
    let data = products.filter((item) => {
      return item.category === 'sofa'

    })
    setSales(data)
  }

  // filter item by search bar
  const handleInput = (e) => {
    // console.log(e.target.value);
    e.preventDefault()
    const finditem = products.filter((item) => {
      return item.category.match(e.target.value) || item.productName.match(e.target.value)
    })
    setSales(finditem)
    // setSales(e.target.value)
  }


  // filtering the item with dropdown
  const handleclick = (category) => {
    let categoryitem = products.filter((item) => {
      return item.category === category
    })
    setSales(categoryitem)
    setcoverheading(category)
  }


  return (
    <>
      {/* background image */}
      <div className='position-relative'>
        <img src={table} alt='table' className='w-100' style={{ height: '35vh', filter: 'brightness(50%)' }} />
        <h4 className='text-light position-absolute top-50 start-50 translate-middle '>{coverheading}</h4>
      </div>
      {/* dropdown input variables */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="dropdown">
              <button class='btn dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#0f3460', color: 'white' }}>Filter By Category</button>
              <ul className="dropdown-menu">
                <li><Link className='dropdown-item' onClick={() => handleclick('sofa')}>Sofa</Link></li>
                <li><Link className='dropdown-item' onClick={() => handleclick('chair')}>Chair</Link></li>
                <li><Link className='dropdown-item' onClick={() => handleclick('watch')}>Watch</Link></li>
                <li><Link className='dropdown-item' onClick={() => handleclick('mobile')}>Mobile</Link></li>
                <li><Link className='dropdown-item' onClick={() => handleclick('wireless')}>Wireless</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <form class="container-fluid">
              <div className="input-group">
                <input type="text" class="form-control" placeholder='Search..' aria-label="Username" aria-describedby="basic-addon1"
                  onInput={handleInput} />
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Best sales related itemdata */}
      <div className='container mt-4 mb-4'>
        <div className='row mt-4 g-4 d-flex justify-content-center'>
          <h2 className='text-center mt-4 mb-3'>Best Sales</h2>
          {
            sales.map((items) => (
              <div className='col-md-4'>
                <div className='card' key={items.id}>
                  <div className='card-body'>
                    <Link to={`/product/${items.id}`}>
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

    </>
  )
}

export default Shop

